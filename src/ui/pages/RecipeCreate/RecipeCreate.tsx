// directory imports
import '@ui/index.css'
import useRecipeCreate from '@ui/hooks/useCreateRecipe';


import { TextInput, NavBar, Pill, Button, DropdownSelect, Loader } from '@ui/components';
import { RecipeCreateInstructions } from './RecipeCreateInstructions';
import { RecipeCreateIngredients } from './RecipeCreateIngredients';

// third party imports
import { ChangeEvent, useState, useRef } from 'react';

import { IngredientBody } from '@src/service/recipeService';

const RecipeCreate = () => {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [preptime, setPreptime] = useState(0)
    const [cooktime, setCooktime] = useState(0)
    const [servings, setServings] = useState(1)

    const [tagList, setTagList] = useState<string[]>([])
    const existingTags = ["Mexican", "Korean", "Italian", "Indian","Spicy", "High Protein", "Halal", "Vegetarian"]

    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)
    const [carbohydrates, setCarbohydrates] = useState(0)
    const [fats, setFats] = useState(0)
    const [isPerServing, setIsPerServing] = useState(true)

    const [ingredientList, setIngredientList] = useState<IngredientBody[]>([])

    const [instructionList, setInstructionList] = useState<string[]>([])
    
    const { create, isLoading: isCreating } = useRecipeCreate();
    

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }  

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handlePreptimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPreptime(Math.max(0, e.target.valueAsNumber))
    }

    const handleCooktimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCooktime(Math.max(0, e.target.valueAsNumber))
    }

    const handleServingsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setServings(Math.max(1, e.target.valueAsNumber))
    }

    const removeTag = (index: number) => {
        setTagList(tagList.filter((_, i) => i !== index))
    }

    const handleCalorieChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCalories(Math.max(e.target.valueAsNumber, 0))
    }

    const handleProteinChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Math.max(e.target.valueAsNumber, 0)
        setProtein(value)
        calculateCalories(value, carbohydrates, fats)
    }
    const handleCarbohydrateChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Math.max(e.target.valueAsNumber, 0)
        setCarbohydrates(value)
        calculateCalories(protein, value, fats)

    }
    const handleFatChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Math.max(e.target.valueAsNumber, 0)
        setFats(value)
        calculateCalories(protein, carbohydrates, value)
    }

    const handleIsPerServingChange = (selectedIsPerServing: boolean) => {
        setIsPerServing(selectedIsPerServing)
    }

    const calculateCalories = (p: number, c: number, f: number) => {
        p = isNaN(p) ? 0 : p
        c = isNaN(c) ? 0 : c
        f = isNaN(f) ? 0 : f
        setCalories(Math.max(p * 4 + c * 4 + f * 9, 0))
    }

    const handleTagSelect = (newTag: string) => {
        setTagList(prevTags => [...prevTags, newTag])
    }

    const isValidRecipe = () => {
        if (!title) {
            alert("Recipe Title is required.")
            return false
        }
        if (!description) {
            alert("Recipe Description is required.")
            return false
        }
        if (ingredientList.length === 0) {
            alert("At least one Ingredient is required.")
            return false
        }
        return true
    }



    const submitRecipe = async () => {
        if (isValidRecipe()) {
            let recipe = {
                title: title,
                description: description,
                prep_time: preptime,
                cook_time: cooktime,
                servings: servings
            }
    
            let macros = {
                calories: calories,
                protein: protein,
                carbohydrates: carbohydrates,
                fats: fats
            }
            if (!isPerServing) {
                macros.calories = Math.round(calories / servings)
                macros.protein = Math.round(protein / servings)
                macros.carbohydrates = Math.round(carbohydrates / servings)
                macros.fats = Math.round(fats / servings)
            }
            
            
    
            create({recipe, ingredientList, instructionList, tagList, macros}, 
                {
                    onSuccess: (result) => {
                        console.log(result)
                    }
                }
            )
        }
    }

    if (isCreating) {
        return <Loader/>
    }

    return (
        <>
            <div className="min-h-screen h-auto overflow-y-auto from-orange-300 to-yellow-200 bg-gradient-to-b">
                <NavBar/>

                <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 mt-5'>
                    {/* image */}
                    <div className='sm:col-span-1 flex justify-center m-5'>
                        <img alt="recipe result" src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?resize=400x300&vertical=center"/>
                    </div>

                    {/* food info */}
                    <div className='sm:col-span-1 flex flex-col sm:justify-evenly m-5 space-y-4 '>
                        <TextInput
                        required
                        id="title"
                        type="text"
                        label="Recipe Title"
                        onChange={handleTitleChange}
                        value={title}
                        />
                        <div className="relative">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Recipe Description
                                <textarea
                                    id="description"
                                    ref={textareaRef}
                                    value={description}
                                    name="description"
                                    onChange={handleDescriptionChange}
                                    rows={1}
                                    className="block w-full h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6 px-4 resize-none overflow-y-auto"
                                />

                            </label>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 items-end gap-2'>
                            <div className='sm:col-span-1'>
                                <TextInput
                                    required
                                    id="preptime"
                                    type="number"
                                    label="Prep Time (min)"
                                    onChange={handlePreptimeChange}
                                    value={isNaN(preptime) ? "0" : preptime.toString()}
                                />
                            </div>
                            <div className='sm:col-span-1'>
                                <TextInput
                                    required
                                    id="cooktime"
                                    type="number"
                                    label="Cook Time (min)"
                                    onChange={handleCooktimeChange}
                                    value={isNaN(cooktime) ? "0" : cooktime.toString()}
                                />
                            </div>
                            <div className='sm:col-span-1'>
                                <TextInput 
                                    required
                                    id="servings"
                                    type="number"
                                    label="Servings"
                                    onChange={handleServingsChange}
                                    value={isNaN(servings) ? "0" : servings.toString()}
                                />
                            </div>
                        </div>

                        <div>
                            <DropdownSelect
                                existingOptionList={existingTags}
                                onSelect={handleTagSelect}
                                label="Tags"
                                showInputOnSelection={false}
                            />

                            
                            
                            <div className='flex flex-row space-x-2 overflow-x-auto min-h-7 max-h-7'>

                                {tagList.map((currTag, index) => (
                                    <div key={index} className='inline-flex items-center justify-between'>
                                                <svg onClick={() => removeTag(index)} className="cursor-pointer h-4 w-4 text-green-900"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                        <div  className='select-none w-max'>
                                            <Pill label={currTag} color="sky"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div className='grid grid-cols-1 sm:grid-cols-10 items-end gap-2'>
                            <div className='sm:col-span-2'>
                                <TextInput
                                    id="protein"
                                    type="number"
                                    label='🥩 Protein (g)'
                                    onChange={handleProteinChange}
                                    value={isNaN(protein) ? "0" : protein.toString()}
                                />
                            </div>
                            <div className='sm:col-span-2'>
                                <TextInput
                                    id="carbohydrates"
                                    type="number"
                                    label='🍞 Carbs (g)'
                                    onChange={handleCarbohydrateChange}
                                    value={isNaN(carbohydrates) ? "0" : carbohydrates.toString()}
                                />
                            </div>
                            <div className='sm:col-span-2'>
                                <TextInput
                                    id="fats"
                                    type="number"
                                    label='🧈 Fats (g)'
                                    onChange={handleFatChange}
                                    value={isNaN(fats) ? "0" : fats.toString()}
                                />
                            </div>
                            <div className='sm:col-span-4'>
                                <TextInput
                                    id="calories"
                                    type="number"
                                    label='🍽️ Calories (kC)'
                                    onChange={handleCalorieChange}
                                    value={isNaN(calories) ? "0" : calories.toString()}
                                />
                            </div>
                        </div>

                        <div className='flex flex-row space-x-4 text-sm'>
                            {/* <span className='text-sm'>
                                Macros
                            </span> */}
                            <label className='flex items-center space-x-2'>
                                <input
                                    type="radio"
                                    name="option"
                                    value="perServing"
                                    checked={isPerServing}
                                    onChange={() => handleIsPerServingChange(true)}
                                    className='form-radio text-orange-400'
                                />
                                <span>per serving</span>
                                
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input
                                    type="radio"
                                    name="option"
                                    value="inTotal"
                                    checked={!isPerServing}
                                    onChange={() => handleIsPerServingChange(false)}
                                    className='form-radio text-orange-400'
                                />
                                <span>in total</span>
                            </label>
                        </div>
                    </div>
                </div>

                
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*INSTRUCTIONS INPUT AND LIST*/}
                    <RecipeCreateInstructions
                        instructionList={instructionList}
                        setInstructionList={setInstructionList}
                    />
                    {/*INGREDIENTS INPUT AND LIST*/}
                    <RecipeCreateIngredients
                        ingredientList={ingredientList}
                        setIngredientList={setIngredientList}
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='grid m-5 sm:col-start-2 justify-items-end'>
                        <Button
                            onClick={submitRecipe}
                        >
                            Create Recipe
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
};

export default RecipeCreate