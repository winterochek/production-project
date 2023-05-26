import cls from 'shared/lib/class-names';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import cl from './styles.module.scss';

interface Props {
   className?: string;
}

export default function SideBar({ className }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((v) => !v);
  };
  return (
    <div className={cls(cl.root, { [cl.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
