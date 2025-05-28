import { PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import api from "../config/axios";
import type { Task } from "../types";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) {
        toast.error("ID de tâche manquant");
        navigate("/");
        return;
      }
      try {
        const response = await api.get<Task>(`/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        toast.error("Erreur lors du chargement de la tâche");
        console.error("Error fetching task for edit:", error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleSubmit = async (title: string) => {
    if (!id || !task) return;
    try {
      await api.put(`/api/tasks/${id}`, { ...task, title });
      toast.success("Tâche mise à jour avec succès");
      navigate("/");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour de la tâche");
      console.error("Error updating task:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 rounded-full border-t-2 border-b-2 animate-spin border-primary" />
      </div>
    );
  }

  if (!task) {
    return null;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <TaskForm
        initialValue={task.title}
        onSubmit={handleSubmit}
        submitButtonText="Mettre à jour"
        submitButtonColor="emerald"
        title="Modifier la tâche"
        icon={
          <PencilIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        }
      />
    </div>
  );
};

export default EditTask;
