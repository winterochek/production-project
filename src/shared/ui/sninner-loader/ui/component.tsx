import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';

interface Props {
   className?: string;
}

export default function SninnerLoader({ className }: Props) {
   return (
      <div className={cls(cl.root, {}, [className])}>
         <div />
         <div />
         <div />
         <div />
      </div>
   );
}
