import { ChangeEventHandler } from 'react';


export type TextInputProps = {  
    id?: string;
    type?: string;
    label: string;
    subLabel?: string;
    subLabelLink?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    value?: string;
}


