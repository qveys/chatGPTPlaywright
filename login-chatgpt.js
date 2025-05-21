import { chromium } from 'playwright';
import fs from 'fs';
import https from 'https';
import 'dotenv/config';

const { CHATGPT_EMAIL, CHATGPT_PASSWORD, WEBHOOK_URL } = process.env;

const callWebhook = () => {
  if (!WEBHOOK_URL) return;
  const url = new URL(WEBHOOK_URL);
  const req = https.request({
    hostname: url.hostname,
    path: url.pathname + url.search,
    port: 443,
    method: 'POST'
  }, res => {
    console.log(`Webhook : ${res.statusCode}`);
  });
  req.end();
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://auth.openai.com/log-in');
    await page.waitForURL('**auth0.openai.com/**', { timeout: 15000 });

    await page.fill('input[type="email"]', CHATGPT_EMAIL);
    await page.click('button[type="submit"]');

    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    await page.fill('input[type="password"]', CHATGPT_PASSWORD);
    await page.click('button[type="submit"]');

    await page.waitForURL('https://chatgpt.com/', { timeout: 20000 });

    const cookies = await context.cookies();
    fs.writeFileSync('cookies-chatgpt.json', JSON.stringify(cookies, null, 2));

    console.log('✅ Connexion réussie.');
    callWebhook();
  } catch (err) {
    console.error('❌ Erreur :', err.message);
  }

  await browser.close();
})();