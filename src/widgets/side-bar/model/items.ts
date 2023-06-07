import { SVGProps, VFC } from "react";
import { RoutePaths } from "shared/config/routes";
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemInterface {
    path: string,
    text: string,
    Icon: VFC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemInterface[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'About'
    },
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Profile'
    },
]