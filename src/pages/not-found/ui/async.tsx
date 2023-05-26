import { lazy } from 'react';

const NotFoundAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./page')), 1500);
      })
);

export default NotFoundAsync;
