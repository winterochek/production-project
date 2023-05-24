import { About } from 'pages/about';
import { Main } from 'pages/main';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePaths.main,
      element: <Main />,
   },
   [AppRoutes.ABOUT]: {
      path: RoutePaths.about,
      element: <About />,
   },
};
