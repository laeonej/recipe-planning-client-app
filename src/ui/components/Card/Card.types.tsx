import { ReactNode } from "react";

export type CardProps = {
    children: ReactNode;
    maxWidthSize?: 'small' | 'medium' | 'full'
}