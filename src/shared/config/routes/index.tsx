import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE = 'profile',



   // last one
   NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.ABOUT]: '/about',
   [AppRoutes.PROFILE]: '/profile',



   // last one
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
   [AppRoutes.PROFILE]: {
      path: RoutePaths.profile,
      element: <Profile />,
   },



   // last one
   [AppRoutes.NOT_FOUND]: {
      path: RoutePaths.not_found,
      element: <NotFound />,
   },
};
