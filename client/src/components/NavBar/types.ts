import { ButtonProps } from "@chakra-ui/react";

export interface INavLink extends ButtonProps {
    path: string,
    label: string,
    icon?: JSX.Element
}
export interface INavLinks {
    brand?: INavLink,
    fixed?: INavLink[],
    responsive?: INavLink[]
}