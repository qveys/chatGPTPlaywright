# chatGPTPlaywright

Automatise la connexion à ChatGPT via Playwright, récupère les cookies de session et déclenche un webhook optionnel. Prêt à l'emploi en Node.js ou via Docker.

## Fonctionnalités

- Connexion automatisée à https://chatgpt.com
- Récupération et sauvegarde des cookies (`cookies-chatgpt.json`)
- Déclenchement d'un webhook après connexion (optionnel)
- Exécution locale ou via Docker

## Prérequis

- Node.js ≥ 18
- Un compte ChatGPT
- Variables d'environnement :  
  - `CHATGPT_EMAIL`  
  - `CHATGPT_PASSWORD`  
  - `WEBHOOK_URL` (optionnelle)

## Installation

```bash
git clone https://github.com/tonuser/chatGPTPlaywright.git
cd chatGPTPlaywright
npm install
```

Crée un fichier `.env` à la racine :

```
CHATGPT_EMAIL=ton@email.com
CHATGPT_PASSWORD=ton_mot_de_passe
WEBHOOK_URL=https://ton.webhook.url # optionnel
```

## Utilisation

### En local

```bash
npm start
```

### Avec Docker

```bash
docker-compose up --build
```

Les cookies seront sauvegardés dans le dossier `cookies/` (monté en volume).

## Structure

- `login-chatgpt.js` : script principal
- `Dockerfile` et `docker-compose.yml` : pour l'exécution containerisée
- `.env` : variables d'environnement (à ne pas versionner)

## Sécurité

**Ne versionne jamais tes identifiants ou `.env` !**  
Le fichier `.gitignore` est déjà configuré pour ça.

---

Tu veux des badges, une section FAQ ou des exemples d'intégration ? Dis-moi ! 