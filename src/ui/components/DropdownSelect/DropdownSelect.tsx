import { DropdownSelectProps } from "./DropdownSelect.types";
import { useState, forwardRef, useImperativeHandle } from "react";
import { TextInput } from "../TextInput";

const DropdownSelect = forwardRef(({existingOptionList, onSelect, label, showInputOnSelection}: DropdownSelectProps, ref) => {
    const [inputValue, setInputValue] = useState('')
    const [filteredOptions, setFilteredOptions] = useState<string[]>([])
    const [highlightedOptionIndex, setHighlightedOptionIndex] = useState(-1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        setHighlightedOptionIndex(-1)

        if (showInputOnSelection) {
            onSelect(value)
        }

        if (value) {
            const filtered = existingOptionList.filter((option) => 
                option.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredOptions(filtered)
        } else {
            setFilteredOptions([])
        }
    }

    const clearInput = () => {
        setInputValue('')
        setFilteredOptions([])
    }

    useImperativeHandle(ref, () => ({
        clearInput
    }))


    const handleOptionSelect = (option: string) => {
        onSelect(option)
        setFilteredOptions([])

        if (showInputOnSelection) {
            setInputValue(option)
        } else {
            setInputValue('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            /**
             * need to figure out if we're adding what's in the textbox or what's been selected thru highlight
             */
            if (highlightedOptionIndex < 0) {
                handleOptionSelect(inputValue)
            } else {
                handleOptionSelect(filteredOptions[highlightedOptionIndex])
            }
        } else if (e.key === 'ArrowDown') {
            setHighlightedOptionIndex((prevIndex) => prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex)
        } else if (e.key === 'ArrowUp') {
            setHighlightedOptionIndex((prevIndex) => prevIndex > -1 ? prevIndex - 1 : -1)
        }
    }

    const handleMouseEnter = (index: number) => {
        setHighlightedOptionIndex(index); // Update the highlighted index on hover
    };

    return (
        <div className="relative w-full">
            <div onKeyDown={handleKeyDown}>
                <TextInput
                    required
                    id="options"
                    type="text"
                    label={label}
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>

            {filteredOptions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded shadow-md max-h-48 text-sm overflow-y-auto">
                    {filteredOptions.map((option, index) => (
                        <li 
                            key={index}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                highlightedOptionIndex === index ? 'bg-gray-100' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
})

export default DropdownSelect;