import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.ABOUT]: '/about',
   [AppRoutes.NOT_FOUND]: '*',
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
   [AppRoutes.NOT_FOUND]: {
      path: RoutePaths.not_found,
      element: <NotFound />,
   },
};
