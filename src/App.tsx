import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AboutAsync from './pages/about/async';
import MainAsync from './pages/main/async';
import useTheme from './context/theme-context/use-theme';
import './styles/index.scss';
import { cls } from './utils/class-names';

export default function App() {
   const { theme, toggleTheme } = useTheme();
   return (
      <div className={cls('app', {}, [theme])}>
         <button onClick={toggleTheme}>Change theme</button>
         <Link to={'/'}>Main</Link>
         <Link to={'/about'}>About</Link>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/about'} element={<AboutAsync />} />
               <Route path={'/'} element={<MainAsync />} />
            </Routes>
         </Suspense>
      </div>
   );
}
