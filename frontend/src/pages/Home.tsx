import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import TaskItem from "../components/TaskItem";
import { Task } from "../types";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadTasks = useCallback(async () => {
    try {
      const response = await axios.get<Task[]>("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      toast.error("Erreur lors du chargement des tâches");
      console.error("Error loading tasks:", error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadTasks();
  };

  const handleToggle = async (task: Task) => {
    try {
      await axios.put(`/api/tasks/${task.id}`, {
        ...task,
        completed: !task.completed,
      });
      await loadTasks();
    } catch (error) {
      toast.error("Erreur lors de la mise à jour du statut");
      console.error("Error toggling task:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (error) {
      toast.error("Erreur lors de la suppression de la tâche");
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="max-w-2xl px-4 pb-20 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Mes Tâches
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2 text-gray-500 transition-colors rounded-full hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/50"
            aria-label="Rafraîchir la liste"
          >
            <ArrowPathIcon
              className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </button>

          <Link
            to="/add"
            className="inline-flex items-center gap-2 px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
          >
            <PlusCircleIcon className="w-5 h-5" />
            <span>Nouvelle tâche</span>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="flex flex-col w-full space-y-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 bg-gray-200 dark:bg-gray-700 rounded-xl"
              ></div>
            ))}
          </div>
        </div>
      ) : tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => handleToggle(task)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
