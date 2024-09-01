import { CardProps } from "./Card.types";

const Card = ({ children, maxWidthSize = 'full' } : CardProps) => {

    let maxWidth = 'max-w-full' 
    
    switch(maxWidthSize) {
        case 'small':
            maxWidth = 'max-w-60'
            break;
        case 'medium':
            maxWidth = 'max-w-96'
            break;
    }
    
    return (
        <div className={`bg-white h-auto w-full ${maxWidth} rounded-lg border-2 border-slate-500 max-w-`}>
            {children}
        </div>
    )
}

export default Card;