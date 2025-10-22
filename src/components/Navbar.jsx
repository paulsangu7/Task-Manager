import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">

        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 md:mb-0">
          MyApp
        </h1>

        {/* Links */}
        <div className="flex flex-wrap space-x-6 md:space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `min-w-[80px] text-center px-6 py-2 rounded-full font-semibold transition-all duration-300 transform ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 hover:scale-105"
              } no-underline`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `min-w-[80px] text-center px-6 py-2 rounded-full font-semibold transition-all duration-300 transform ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md scale-105"
                  : "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 hover:scale-105"
              } no-underline`
            }
          >
            About
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
