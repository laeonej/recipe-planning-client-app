import {ButtonProps} from './Button.types';

const Button = ({children, disabled=false, onClick, size='md', fullWidth}: ButtonProps) => {
    const disableBtn = disabled ? true : false
    const fullWidthClass = fullWidth ? 'w-full' : ''

    const buttonSize = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg'
    }

    return (
        <button className={`flex ${fullWidthClass} justify-center rounded-md 
        bg-orange-300 px-3 py-1.5 ${buttonSize[size]} 
        font-semibold leading-6 text-white shadow-sm 
        hover:bg-orange-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300
        disabled:bg-gray-400 disabled:cursor-not-allowed
        `} onClick={onClick} disabled={disableBtn}>
            {children}
        </button>
    );
};

export default Button;