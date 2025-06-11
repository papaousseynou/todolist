import type React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Make sure this path is correct

const Header: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container flex justify-between items-center px-4 py-4 mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-primary-dark dark:text-primary-light"
        >
          Todo List
        </Link>
        <div className="flex gap-4 items-center">
          {/* <button
            onClick={() => navigate("/add")}
            className="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Nouvelle Tâche
          </button> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
