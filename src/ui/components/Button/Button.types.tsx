import { MouseEventHandler, ReactNode } from "react"

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';


export type ButtonProps = {
    children: ReactNode;
    disabled?: Boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: ButtonSize;
    fullWidth?: Boolean;
}