import { CheckIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

interface TaskFormProps {
  initialValue?: string;
  onSubmit: (title: string) => Promise<void>;
  submitButtonText: string;
  submitButtonColor: "indigo" | "emerald" | "blue";
  title: string;
  icon: React.ReactNode;
}

const TaskForm: React.FC<TaskFormProps> = ({
  initialValue = "",
  onSubmit,
  submitButtonText,
  submitButtonColor,
  title,
  icon,
}) => {
  const [taskTitle, setTaskTitle] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setTaskTitle(initialValue);
  }, [initialValue]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskTitle.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(taskTitle.trim());
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error("Error submitting task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonColorClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    emerald: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500",
    blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  };

  return (
    <div className="w-full max-w-md p-6 mx-auto bg-white rounded-xl shadow-sm dark:bg-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full dark:bg-indigo-900">
          {icon}
        </span>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="taskTitle"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Titre de la tâche
          </label>
          <input
            id="taskTitle"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Entrez le titre de votre tâche"
            className="w-full p-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !taskTitle.trim()}
          className={`
            flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-all duration-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${buttonColorClasses[submitButtonColor]}
            ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Traitement...
            </span>
          ) : showSuccess ? (
            <span className="flex items-center">
              <CheckIcon className="w-5 h-5 mr-1" />
              Succès!
            </span>
          ) : (
            submitButtonText
          )}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
