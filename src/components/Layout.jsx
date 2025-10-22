import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-inner transition-colors duration-300">
        <Footer />
      </footer>

    </div>
  );
}
