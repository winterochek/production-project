import { MouseEventHandler, useMemo, useState } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from '.';

const defaultTheme =
   (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export default function ThemeProvider({ children }: { children: JSX.Element }) {
   const [theme, setTheme] = useState<Theme>(defaultTheme);
   const changeTheme = (event: MouseEventHandler<HTMLButtonElement>) => {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
   };

   const defaultOptions = useMemo(
      () => ({
         theme,
         setTheme,
      }),
      [theme]
   );
   return (
      <ThemeContext.Provider value={defaultOptions}>
         {children}
      </ThemeContext.Provider>
   );
}
