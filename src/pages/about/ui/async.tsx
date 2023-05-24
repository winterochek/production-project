import { lazy } from 'react';

const AboutAsync = lazy(
   () =>
      new Promise((resolve) => {
         //@ts-ignore
         setTimeout(() => resolve(import('./page')), 1500);
      })
);

export default AboutAsync;
