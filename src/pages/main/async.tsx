import { lazy } from 'react';

const MainAsync = lazy(
    () =>
       new Promise((resolve) => {
          //@ts-ignore
          setTimeout(() => resolve(import('./index')), 1500);
       })
 );
 

export default MainAsync