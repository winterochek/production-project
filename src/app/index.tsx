import { Suspense } from 'react';
import { useTheme } from 'app/providers/theme-provider';
import { NavBar } from 'widgets/nav-bar';
import { SideBar } from 'widgets/side-bar';
import { AppRouter } from './providers/routes-provider';

import cls from 'shared/lib/class-names';

export default function App() {
   const { theme } = useTheme();

   return (
      <div className={cls('app', {}, [theme])}>
         <Suspense fallback=''>
            <NavBar />
            <div className='content-page'>
               <SideBar />
               <AppRouter />
            </div>
         </Suspense>
      </div>
   );
}
