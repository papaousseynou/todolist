###############" front Dockerfile ##########
# Étape 1 : Build vite + typescript avec pnpm
FROM node:18-alpine AS build

# Crée le répertoire de travail
WORKDIR /app

# Installer pnpm globalement
RUN npm install -g pnpm

# Copier les fichiers de dépendances
COPY pnpm-lock.yaml package.json ./

# Installer les dépendances via pnpm
RUN pnpm install

# Copier tout le code source
COPY . .

# Compiler le projet vite
RUN pnpm run build

# Étape 2 : Serveur nginx pour servir le frontend
FROM nginx:alpine

# Copier le build dans le dossier HTML nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port nginx
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
