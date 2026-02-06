import React from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import Button from "../../../shared/ui/Button/Button";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? "Тёмная тема" : "Светлая тема"}
    </Button>
  );
};

export default ThemeSwitcher;
