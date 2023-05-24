import { createContext } from 'react';

export enum Theme {
   LIGHT = 'light',
   DARK = 'dark',
}

interface IThemeContext {
   theme?: Theme;
   setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export default ThemeContext
