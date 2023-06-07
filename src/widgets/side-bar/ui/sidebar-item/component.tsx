import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link';
import { SidebarItemInterface } from 'widgets/side-bar/model/items';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

interface Props {
    item: SidebarItemInterface,
    collapsed: boolean
}

export default function SidebarItem({ item, collapsed }: Props) {
    const { Icon, path, text } = item
    return <AppLink className={cls(cl.item, { [cl.collapsed]: collapsed }, [])} theme={AppLinkTheme.SECONDARY} to={path}>
        <Icon className={cl.icon} />
        <span className={cl.link}>{text}</span>
    </AppLink>
}
