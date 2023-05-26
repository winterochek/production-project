import cls from 'shared/lib/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/app-button';
import cl from './styles.module.scss';

interface Props {
   className?: string;
}

export default function LangSwitcher({ className }: Props) {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={cls(cl.root, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
}
