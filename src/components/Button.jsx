export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
  secondary: "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  outline: "border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-400"
};

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
