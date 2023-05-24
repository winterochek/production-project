import { useTheme, Theme } from 'app/providers/theme-provider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/app-button';
import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';

interface Props {
   className?: string;
}

export default function ThemeSwitcher({ className }: Props) {
   const { theme, toggleTheme } = useTheme();
   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={cls(cl.ThemeSwitcher, {}, [className])}
         onClick={toggleTheme}
      >
         {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
   );
}
