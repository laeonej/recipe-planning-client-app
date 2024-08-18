import { ReactNode } from "react";

export type NavProps = {
    children?: ReactNode;
    routeTo: string;
    label?: string;
    direction: 'left' | 'right';
}