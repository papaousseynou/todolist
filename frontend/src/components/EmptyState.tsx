import { PlusCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EmptyState: React.FC = () => {
  return (
    <div className="py-12 text-center">
      <div className="mb-4 text-gray-400">
        <svg
          className="w-12 h-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
        Aucune tâche
      </h3>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Commencez par créer votre première tâche
      </p>
      <Link
        to="/add"
        className="inline-flex items-center gap-2 px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
      >
        <PlusCircle size={18} />
        <span>Nouvelle tâche</span>
      </Link>
    </div>
  );
};

export default EmptyState;
