import { createContext } from 'react';

export enum Theme {
   LIGHT = 'app_light_theme',
   DARK = 'app_dark_theme',
}

interface IThemeContext {
   theme?: Theme;
   setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export default ThemeContext;
