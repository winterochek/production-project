import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About } from 'pages/about';
import { Main } from 'pages/main';
import { useTheme } from 'app/providers/theme-provider';
import cls from 'shared/lib/class-names';
import './styles/index.scss';

export default function App() {
   const { theme, toggleTheme } = useTheme();
   return (
      <div className={cls('app', {}, [theme])}>
         <button onClick={toggleTheme}>Change theme</button>
         <Link to={'/'}>Main</Link>
         <Link to={'/about'}>About</Link>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/about'} element={<About />} />
               <Route path={'/'} element={<Main />} />
            </Routes>
         </Suspense>
      </div>
   );
}
