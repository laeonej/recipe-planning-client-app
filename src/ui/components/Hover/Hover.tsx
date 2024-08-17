import { HoverProps } from "./Hover.types";
import { Tooltip } from "flowbite-react"

const Hover = ({
    icon: Icon,
    size,
    color = 'black',
    hoverPosition = 'top',
    hoverText
} : HoverProps) => {


    return (
        <Tooltip content={hoverText} style="light" placement={hoverPosition} className="w-max ml-2 text-sm mr-2 inline-flex">
            <button>
                <Icon size={size} color={color} className="mr-2"/>
            </button>
        </Tooltip>
    )
}

export default Hover;