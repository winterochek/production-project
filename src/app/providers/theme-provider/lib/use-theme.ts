import { useContext } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from './theme-context';

type ReturnType = {
  toggleTheme: () => void;
  theme: Theme;
};
const useTheme = (): ReturnType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};

export default useTheme;
