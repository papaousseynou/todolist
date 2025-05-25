import { Request, Response } from "express";
import { Task } from "../models/Task";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll({ order: [["created_at", "DESC"]] });
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des tâches", error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title, completed: false });
    res.status(201).json(task);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erreur lors de la création de la tâche", error });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la tâche", error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.update({ title, completed });
    res.json(task);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erreur lors de la mise à jour de la tâche", error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.destroy();
    res.json({ message: "Tâche supprimée" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la tâche", error });
  }
};
