# Étape 1 : build
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers nécessaires pour l'installation et la compilation
COPY package*.json tsconfig.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Compiler le TypeScript
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
