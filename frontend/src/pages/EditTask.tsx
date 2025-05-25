import { PencilIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Make sure react-hot-toast is installed
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { Task } from "../types";

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
        const response = await axios.get<Task>(`/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        toast.error("Erreur lors du chargement de la tâche");
        console.error("Error fetching task for edit:", error);
        navigate("/"); // Redirect to home on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleSubmit = async (title: string) => {
    if (!id || !task) return;
    await axios.put(`/api/tasks/${id}`, { ...task, title });
    toast.success("Tâche mise à jour avec succès");
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  if (!task) {
    return null; // Or a message indicating task not found
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <TaskForm
        initialValue={task.title}
        onSubmit={handleSubmit}
        submitButtonText="Modifier la tâche"
        submitButtonColor="blue"
        title="Modifier la Tâche"
        icon={
          <PencilIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        }
      />
    </div>
  );
};

export default EditTask;
