import { AppRouter } from './providers/routes-provider';
import { useTheme } from 'app/providers/theme-provider';
import { NavBar } from 'widgets/nav-bar';
import cls from 'shared/lib/class-names';
import './styles/index.scss';
import { SideBar } from 'widgets/side-bar';

export default function App() {
   const { theme } = useTheme();
   return (
      <div className={cls('app', {}, [theme])}>
         <NavBar />
         <div className='content-page'>
            <SideBar />
            <AppRouter />
         </div>
      </div>
   );
}
