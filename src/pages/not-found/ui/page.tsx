import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
   className?: string;
}

export default function Page({ className }: Props) {
   const { t } = useTranslation();
   return (
      <div className={cls(cl.root, {}, [className])}>
         {t('Страница не найдена')}
      </div>
   );
}
