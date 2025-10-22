import TaskManager from "../components/TaskManager";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8">
          Welcome to Your Dashboard
        </h1>

        {/* Task Manager Section */}
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Task Manager
          </h2>
          <TaskManager />
        </div>

        {/* Posts Section */}
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Latest Posts
          </h2>
          <Posts />
        </div>

      </div>
    </section>
  );
}
