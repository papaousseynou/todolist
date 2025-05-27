import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sequelize } from "./config/database";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connexion à la base de données réussie.");

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur :", error);
  }
};

start();
