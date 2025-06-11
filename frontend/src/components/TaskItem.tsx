import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"; // Make sure heroicons are installed
import type React from "react";
import { Link } from "react-router-dom";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex gap-4 items-center p-4 bg-white rounded-xl shadow-sm transition-shadow group dark:bg-gray-800 hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-colors ${
          task.completed
            ? "bg-indigo-600 border-indigo-600"
            : "border-gray-300 dark:border-gray-600 hover:border-indigo-600"
        }`}
        aria-label={
          task.completed
            ? "Marquer comme non terminée"
            : "Marquer comme terminée"
        }
      >
        {task.completed && (
          // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
          <svg
            className="w-full h-full text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <div className="flex-grow min-w-0">
        <h3
          className={`text-lg font-medium truncate ${
            task.completed
              ? "text-gray-500 line-through dark:text-gray-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {task.title}
        </h3>
      </div>

      <div className="flex gap-2 items-center transition-opacity">
        <Link
          to={`/edit/${task.id}`}
          className="p-2 text-gray-500 rounded-lg transition-colors hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/50"
          aria-label="Modifier la tâche"
        >
          <PencilIcon className="w-5 h-5" />
        </Link>
        <button
          type="button"
          onClick={onDelete}
          className="p-2 text-gray-500 rounded-lg transition-colors hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/50"
          aria-label="Supprimer la tâche"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
