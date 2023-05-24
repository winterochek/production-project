import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routes';

export default function AppRouter() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
               <Route key={path} element={element} path={path} />
            ))}
         </Routes>
      </Suspense>
   );
}
