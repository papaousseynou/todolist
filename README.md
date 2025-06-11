# TaskMaster - Application de Gestion de Tâches

TaskMaster est une application web moderne de gestion de tâches, construite avec React (frontend) et Node.js/Express (backend), utilisant MySQL comme base de données.

## 🚀 Fonctionnalités

- ✅ Création de tâches
- ✏️ Modification de tâches
- 🗑️ Suppression de tâches
- ✅ Marquage des tâches comme terminées
- 🔄 Rafraîchissement de la liste
- 📱 Interface responsive
- 🎨 Design moderne avec Tailwind CSS

## 📋 Prérequis

- Node.js (v20 ou supérieur)
- MySQL (v8 ou supérieur)
- npm ou yarn

## 🛠️ Installation

### 1. Cloner le dépôt

```bash
git clone [URL_DE_VOTRE_REPO]
cd todolist
```

### 2. Configuration de la base de données

1. Créez une base de données MySQL :

```sql
CREATE DATABASE todolist;
```

2. Configurez les variables d'environnement :
   - Copiez le fichier `.env.example` en `.env` dans le dossier `backend`
   - Modifiez les variables selon votre configuration :

```env
DB_HOST=localhost
DB_USER=
DB_PASS=
DB_NAME=todolist
PORT=3000
```

### 3. Installation du Backend

```bash
cd backend
npm install
npm run dev
```

Le serveur backend démarrera sur `http://localhost:3000`

### 4. Installation du Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application frontend sera accessible sur `http://localhost:5173`

## 🐳 Docker (En développement)

> **Note** : L'infrastructure Docker est en cours de développement dans la branche `infrastructure`.
> Cette section sera mise à jour une fois la configuration Docker finalisée.

L'application sera bientôt disponible avec Docker, incluant :

- Conteneurisation du frontend React
- Conteneurisation du backend Express
- Base de données MySQL dans un conteneur
- Configuration via docker-compose

Pour l'instant, suivez les instructions d'installation manuelle ci-dessus.

## 💻 Utilisation

1. **Accueil**

   - La page d'accueil affiche la liste de toutes vos tâches
   - Utilisez le bouton "Nouvelle tâche" pour créer une tâche
   - Le bouton de rafraîchissement permet de mettre à jour la liste

2. **Création d'une tâche**

   - Cliquez sur "Nouvelle tâche" dans la barre de navigation
   - Entrez le titre de la tâche
   - Cliquez sur "Ajouter la tâche"

3. **Modification d'une tâche**

   - Survolez une tâche pour voir les boutons d'action
   - Cliquez sur l'icône de crayon pour modifier
   - Modifiez le titre et cliquez sur "Mettre à jour la tâche"

4. **Suppression d'une tâche**

   - Survolez une tâche pour voir les boutons d'action
   - Cliquez sur l'icône de corbeille
   - Confirmez la suppression

5. **Marquer une tâche comme terminée**
   - Cliquez sur la case à cocher à gauche de la tâche
   - La tâche sera barrée et marquée comme terminée

## 🛠️ Technologies utilisées

### Frontend

- React
- TypeScript
- React Router
- Tailwind CSS
- Axios
- Lucide Icons

### Backend

- Node.js
- Express
- MySQL2
- CORS
- dotenv

## 📁 Structure du projet

```text
todolist/
├── frontend/               # Application React
│   ├── src/
│   │   ├── components/    # Composants réutilisables
│   │   ├── pages/        # Pages de l'application
│   │   ├── api/          # Services API
│   │   └── types/        # Types TypeScript
│   └── ...
├── backend/               # Serveur Express
│   ├── src/
│   │   ├── controllers/  # Contrôleurs
│   │   ├── routes/       # Routes API
│   │   ├── models/       # Modèles de base de données
│   │   └── db/          # Scripts SQL
│   └── ...
└── README.md
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteur

Papa Ousseynou DIOUF
Khadidja Boye
Thierno Aliou BA
Serigne Fallou SECK

## 🙏 Remerciements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MySQL](https://www.mysql.com/)
