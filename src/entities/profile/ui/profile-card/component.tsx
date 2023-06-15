import { useProfile } from '../../model/hooks';

import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { Text } from 'shared/ui/app-text';
import { Button, ThemeButton } from 'shared/ui/app-button';
import { Input } from 'shared/ui/app-input';

interface Props {
    className?: string;
}

export default function ProfileCard({ className }: Props) {
    const { profileData, isLoading, error } = useProfile()
    return (
        <div className={cls(cl.root, {}, [className])}>
            <div className={cl.header}>
                <Text title={'Profile'} />
                <Button className={cl.btn} theme={ThemeButton.OUTLINE}>
                    {'Modify'}
                </Button>
            </div>
            <div className={cl.data}>
                <Input value={profileData?.first} placeholder='First name' className={cl.input} />
                <Input value={profileData?.lastname} placeholder='Last name' className={cl.input} />
            </div>
        </div>
    )
}
