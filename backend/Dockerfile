# Build stage
FROM node:18-alpine

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Installer les dépendances
RUN npm install -g pnpm && pnpm install

# Copier le reste des fichiers du backend
COPY . .

# Compiler le TypeScript
RUN pnpm build

# Exposer le port de l'application backend
EXPOSE 5000

# Démarrer l'application
CMD ["pnpm", "start"]
