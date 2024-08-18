import { PillProp } from "./Pill.types";

const Pill = ({ children, label, color } : PillProp) => {

    let divColor = `bg-gray-400 border-gray-500`
    

    switch(color) {
        case 'violet':
            divColor = 'bg-violet-400 border-violet-500';
            break;
        case 'red':
            divColor = "bg-red-400 border-red-500";
            break;
        case 'sky':
            divColor = "bg-sky-300 border-sky-400";
            break;
        case 'orange':
            divColor = "bg-orange-300 border-orange-400";
            break;
    }

    const divClass = `h-fit flex justify-normal font-sans rounded-full p-0.5 m-0.5 border ${divColor}`

    return (
        <div className={divClass}>
            {children}
            <p className="text-xs px-1">{label}</p>
        </div>
    );
};

export default Pill;