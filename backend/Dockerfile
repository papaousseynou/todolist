# Étape 1 : Utilisation de l'image de base Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou pnpm-lock.yaml si tu utilises pnpm)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du backend
COPY . .

# Exposer le port de l'application backend
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "start"]
