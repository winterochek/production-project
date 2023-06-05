import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from './providers/routes-provider';
import { NavBar } from 'widgets/nav-bar';
import { SideBar } from 'widgets/side-bar';
import { userActions } from 'entities/user';

import cls from 'shared/lib/class-names';

export default function App() {
   const { theme } = useTheme();
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(userActions.initAuthData())
   }, [])

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
