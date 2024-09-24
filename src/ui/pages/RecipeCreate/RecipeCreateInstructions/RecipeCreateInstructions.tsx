import { RecipeCreateInstructionsProps } from "./RecipeCreateInstructions.types"
import { TextInput, RecipeInstruction, Button } from "@src/ui/components";
import { useState, ChangeEvent, useEffect, useRef } from "react";

const RecipeCreateInstructions = ({instructionList, setInstructionList}: RecipeCreateInstructionsProps ) => {

    const [instruction, setInstruction] = useState('')
    const scrollingListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollingListRef.current) {
            scrollingListRef.current.scrollTop = scrollingListRef.current.scrollHeight
        }
    }, [instructionList])


    const handleInstructionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInstruction(e.target.value)
    }

    const addInstruction = () => {
        setInstructionList(prevInstructions => [...prevInstructions, instruction]);
        setInstruction('')
    }

    const removeInstruction = (index: number) => {
        setInstructionList(instructionList.filter((_, i) => i !== index));
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && instruction) {
            addInstruction()
        }
    }

    return (
        <div ref={scrollingListRef} className='relative flex flex-col min-h-96 max-h-96 overflow-y-auto sm:col-span-1 border-2 border-black rounded-lg bg-white m-5'>
            <span className='sticky top-0 flex justify-center font-sans text-lg font-extrabold bg-white'>Instructions:</span>
            <ul className='list'>
                {instructionList.map((step, index) => (
                    <div key={index} className=' grid grid-cols-10'>
                        <div className='col-span-1 flex items-center justify-evenly '>
                            <Button
                                onClick={() => removeInstruction(index)}
                            >
                            -
                            </Button>
                        </div>
                        <li className='col-span-9'>
                            <RecipeInstruction
                            step={(index + 1).toString()}
                            instruction={step}
                            />
                        </li>
                    </div>
                ))}
            </ul>

            <div className="flex flex-row items-end space-x-4 m-5" onKeyDown={handleKeyDown}>
                <div className="w-full">
                    <TextInput
                        required
                        id="instruction"
                        type="text"
                        label="Instruction"
                        onChange={handleInstructionChange}
                        value={instruction}
                    />
                </div>
                
                <Button
                    onClick={addInstruction}
                    disabled={!instruction}
                >
                    Add
                </Button>
                
            </div>
        </div>
    )
}

export default RecipeCreateInstructions;