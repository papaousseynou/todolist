import { PlusCircleIcon } from "@heroicons/react/24/outline";
// import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import api from "../config/axios";

const AddTask: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (title: string) => {
    try {
      await api.post("/api/tasks", { title, completed: false });
      toast.success("Tâche créée avec succès");
      navigate("/");
    } catch (error) {
      toast.error("Erreur lors de la création de la tâche");
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <TaskForm
        onSubmit={handleSubmit}
        submitButtonText="Créer la tâche"
        submitButtonColor="indigo"
        title="Nouvelle Tâche"
        icon={
          <PlusCircleIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        }
      />
    </div>
  );
};

export default AddTask;
