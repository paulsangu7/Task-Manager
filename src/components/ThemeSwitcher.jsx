import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
