import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="rounded flex gap-2 items-center">
      {theme === "dark" ? (
        <>
          <IoMoonOutline />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <IoSunnyOutline />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
