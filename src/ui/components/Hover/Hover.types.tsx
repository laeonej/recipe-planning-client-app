import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

type Placement = 'top' | 'bottom' | 'left' | 'right'

export type HoverProps = {
    icon: IconType;
    size: number;
    color?: string;
    hoverPosition?: Placement;
    hoverContent: React.ReactNode;
}