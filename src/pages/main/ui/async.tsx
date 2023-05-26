import { lazy } from 'react';

const MainAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./page')), 1500);
  }),
);

export default MainAsync;
