import { RecipeCreateIngredientsProps } from "./RecipeCreateIngredients.types"
import { Button, TextInput, RecipeIngredient, DropdownSelect } from "@src/ui/components";
import { useState, useRef, useEffect, ChangeEvent } from "react";



const RecipeCreateIngredients = ({ingredientList, setIngredientList}: RecipeCreateIngredientsProps) => {

    const [ingredient, setIngredient] = useState('')
    const [amount, setAmount] = useState(0)
    const [unit, setUnit] = useState('')
    const unitList = ["oz", "g", "kg", "lb", "count", "tbsp", "tsp", "ml", "l", "cup"]
    const scrollingListRef = useRef<HTMLDivElement>(null);
    const unitInputRef = useRef<{ clearInput: () => void }>(null);

    useEffect(() => {
        if (scrollingListRef.current) {
            scrollingListRef.current.scrollTop = scrollingListRef.current.scrollHeight
        }
    }, [ingredientList])

    type Ingredient = {
        ingredient: string,
        amount: number,
        unit: string
    }

    const handleIngredientChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIngredient(e.target.value)
    }
    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        let num = e.target.valueAsNumber
        num = Math.max(num, 0)
        setAmount(num)
    }

    const handleUnitSelect = (newUnit: string) => {
        setUnit(newUnit)
    }

    const removeIngredient = (index: number) => {
        setIngredientList(ingredientList.filter((_, i) => i !== index));
    }

    const addIngredient = () => {
        //add ingredient

        //check if ingredient exists already

        if (ingredientList.some(ing => ing.ingredient.toLowerCase() === ingredient.toLowerCase())) {
            alert("You've already added this ingredient")
        } else {
            const newIngredient: Ingredient = {
                ingredient,
                amount,
                unit
            }
    
            setIngredientList(prevIngredients => [...prevIngredients, newIngredient ]);
            setIngredient('')
            setAmount(0)
            setUnit('')    
            handleClearUnit()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && ingredient && amount && unit) {
            addIngredient()
        }
    }

    const handleClearUnit = () => {
        if (unitInputRef.current) {
            unitInputRef.current.clearInput()
        }
    }


    return (
        <div ref={scrollingListRef} className='relative flex flex-col min-h-96 max-h-96 overflow-y-auto sm:col-span-1 border-2 border-black rounded-lg bg-white m-5'>
            <span className='sticky top-0 bg-white flex justify-center font-sans text-lg font-extrabold'>Ingredients:</span>
            <ul className='list'>
                {ingredientList.map((ing, index) => (
                    <div key={index} className='grid grid-cols-10'>
                        <div className="col-span-1 flex items-center justify-evenly">
                            <Button
                            onClick={() => removeIngredient(index)}
                            >
                                -
                            </Button>
                        </div>

                        <li className="col-span-9">
                            <RecipeIngredient
                                ingredient={ing.ingredient}
                                amount={ing.amount}
                                unit={ing.unit}
                            />
                        </li>
                    </div>
                    
                ))}
            </ul>
            
            <div className="flex flex-row items-end space-x-2 m-5" onKeyDown={handleKeyDown}>
                <div className="w-1/2">
                    <TextInput
                        required
                        id="ingredient"
                        type="text"
                        label="Ingredient"
                        onChange={handleIngredientChange}
                        value={ingredient}
                    />
                </div>
                <div className='w-1/4'>
                    <TextInput
                        required
                        id="amount"
                        type="number"
                        label="Amount"
                        onChange={handleAmountChange}
                        value={isNaN(amount) ? "0" : amount.toString()}
                    />
                </div>
                <div className='w-1/4'>
                    <DropdownSelect 
                        existingOptionList={unitList}
                        onSelect={handleUnitSelect}
                        label="Unit"
                        showInputOnSelection={true}
                        clearInputField={handleClearUnit}
                        ref={unitInputRef}
                    />
                </div>

                <Button
                    onClick={addIngredient}
                    disabled={!ingredient || !amount || !unit}>
                    Add
                </Button>
            </div>
        </div>
    )
}

export default RecipeCreateIngredients;