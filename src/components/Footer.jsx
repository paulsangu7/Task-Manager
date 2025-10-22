export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} My React App. All rights reserved.
        </p>

        {/* Middle links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Right side */}
        <div>
          <p className="text-sm">Made using React + Tailwind</p>
        </div>

      </div>
    </footer>
  );
}
