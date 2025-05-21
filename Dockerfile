FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Crée un dossier pour le script
WORKDIR /app

# Copie les fichiers du projet
COPY . .

# Installe les dépendances Node.js
RUN npm install

# Lancer le script par défaut
CMD ["node", "login-chatgpt.js"]