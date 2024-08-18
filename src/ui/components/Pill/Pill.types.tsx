import { ReactNode } from "react"


export type PillProp = {
    children?: ReactNode;
    label?: string;
    color: 'gray' | 'violet' | 'red' | 'sky' | 'orange';
}