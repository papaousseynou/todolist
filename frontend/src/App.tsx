import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast"; // Make sure react-hot-toast is installed
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";

const App: React.FC = () => {
  useEffect(() => {
    // Check for saved theme or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen transition-colors duration-200 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <Header />
        <main className="container px-4 py-8 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </main>
        <Toaster position="top-right" /> {/* Toast notifications */}
      </div>
    </Router>
  );
};

export default App;
