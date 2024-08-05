import { TextInputProps } from "./TextInput.types";

import { Link } from "react-router-dom";

const TextInput = ({
    id,
    type="text",
    label, 
    subLabel, 
    subLabelLink,
    required=false,
    onChange,
    value,
} : TextInputProps) => {
    return (
        <>
            <div className=" flex items-center justify-between ">
                <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
                {subLabelLink ? <Link className="font-semibold text-orange-600 hover:text-orange-500 text-sm" to={subLabelLink}>{subLabel}</Link> : 
                <label className="block text-sm font-medium leading-6 text-gray-900">{subLabel}</label>
                }
            </div>
            <div>
                <input 
                id={id} 
                type={type} 
                required={required} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6 px-4"
                onChange={onChange}
                value={value}
                />
            </div>
        </>
    );
};

export default TextInput;