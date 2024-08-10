import { MouseEventHandler } from "react";
import { IconType } from "react-icons";


export type HoverProps = {
    icon: IconType;
    label: string;
    size: number;
    // textBoxWidth: string;
    color?: string;
    hoverText: React.ReactNode;
}