<<<<<<< HEAD
# Étape 1 : build
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers nécessaires pour l'installation et la compilation
COPY package*.json tsconfig.json ./
RUN npm install
=======
# Build stage
FROM node:18-alpine

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Installer les dépendances
RUN npm install -g pnpm && pnpm install
>>>>>>> d5a502d5e53ce2c63dd8f49a5d875b7e1df05bcd

# Copier le reste du code source
COPY . .

# Compiler le TypeScript
<<<<<<< HEAD
RUN npm run build

# Étape 2 : image finale de production
FROM node:18-alpine

WORKDIR /app

# Copier uniquement ce qui est nécessaire
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

RUN npm install --only=production

# Exposer le port de l'app
EXPOSE 5000

# Démarrer l'application compilée
CMD ["node", "dist/index.js"]
=======
RUN pnpm build

# Exposer le port de l'application backend
EXPOSE 5000

# Démarrer l'application
CMD ["pnpm", "start"]
>>>>>>> d5a502d5e53ce2c63dd8f49a5d875b7e1df05bcd
