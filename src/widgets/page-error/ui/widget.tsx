import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/app-button';

interface Props {
   className?: string;
}

export default function PageError({ className }: Props) {
   const { t } = useTranslation();

   const reloadPage = () => {
      location.reload();
   };
   return (
      <div className={cls(cl.root, {}, [className])}>
         <p>{t('Произошла непредвиденная ошибка')}</p>
         <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
   );
}
