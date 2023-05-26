import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { SninnerLoader } from 'shared/ui/sninner-loader';

interface Props {
   className?: string;
}

export default function PageLoader({ className }: Props) {
   return (
      <div className={cls(cl.root, {}, [className])}>
         <SninnerLoader />
      </div>
   );
}
