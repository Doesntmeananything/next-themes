import { useTheme } from "next-themes";

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  return (
    // This wrapper helps fix the issue by applying background styles lower in the DOM tree
    // <div className="bg-white dark:bg-black">
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100 font-heading">
        Next Themes + Tailwind Dark Mode
      </h1>

      <button
        className="px-4 py-2 mt-16 font-semibold text-white bg-black rounded-md dark:text-black dark:bg-white"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
    // </div>
  );
}
