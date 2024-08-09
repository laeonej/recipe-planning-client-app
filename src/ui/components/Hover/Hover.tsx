import { HoverProps } from "./Hover.types";
import { useState } from "react";

const Hover = ({
    icon: Icon,
    label,
    size,
    // textBoxWidth = '100px',
    color = 'black',
    hoverText
} : HoverProps) => {



    const [isHovered, setIsHovered] = useState(false)

    return (
        <div >
            <button onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Icon size={size} color={color} className="mr-2"/>
            </button>

            {isHovered && (
                <div className="absolute z-50 px-6 py-3 bg-white text-gray-900 text-sm rounded-md shadow-sm ring-1 ring-inset ring-gray-300 "
                    // style={{width: textBoxWidth}}
                >
                    {hoverText}
                </div>
            )}
        </div>
        
        
         
    )
}

export default Hover;