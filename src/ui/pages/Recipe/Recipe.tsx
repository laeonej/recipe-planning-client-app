import '@ui/index.css';

import { NavBar, Pill, RecipeInstruction, Loader } from '@src/ui/components';
import { RecipeMacrosCard } from './RecipeMacrosCard';
import { RecipeIngredientsCard } from './RecipeIngredientsCard';

import useGetRecipe from '@src/ui/hooks/useGetRecipe';
import useGetUser from '@src/ui/hooks/useGetUser';

import { IngredientBody, InstructionBody, TagBody, MacrosBody } from '@src/service/recipeService';
import { GetUserResponse } from '@src/service/userService';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Recipe = () => {

    const { recipeId } = useParams();
    const {isLoading, error, data} = useGetRecipe(Number(recipeId));
    const {isLoading: isLoadingUser, error: userError, data: userData} = useGetUser(data?.recipe.author_id || 0);
    const [ingredientList, setIngredientList] = useState<IngredientBody[]>([]);
    const [instructionList, setInstructionList] = useState<InstructionBody[]>([]);
    const [tagList, setTagList] = useState<TagBody[]>([]);
    const [macros, setMacros] = useState<MacrosBody>({calories: 0, carbohydrates: 0, protein: 0, fats: 0});
    const [user, setUser] = useState<GetUserResponse>({email: "", username: "", user_id: -1});

    useEffect(() => {
        console.log(data)
        console.log(userData)

        if (data?.ingredients) setIngredientList(data?.ingredients);

        if (data?.instructions) setInstructionList(data?.instructions);

        if (data?.tags) setTagList(data?.tags);

        if (data?.macros) setMacros(data?.macros);

        if (userData) setUser(userData);

    }, [data, userData])


    if (!recipeId) {
        return <div>RECIPE DOESN'T EXIST</div>
    }
    if (isLoading || isLoadingUser) {
        return <Loader/>
    }
    if (error) {
        return <div>ERROR: COULD NOT FIND RECIPE</div>
    }
    if (userError) {
        return <div>ERROR: COULD NOT FIND USER</div>
    }

    return (
        <div className=" min-h-screen h-auto overflow-y-auto from-orange-300 to-yellow-200 bg-gradient-to-b ">
            <NavBar/>
            <div className=' w-full h-auto grid grid-cols-1 sm:grid-cols-3 mt-5'>
                {/* image */}
                <div className='sm:col-span-2 flex justify-center m-5'>
                    <img alt="recipe result" src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?resize=400x300&vertical=center"/>
                </div>
                {/* quick info */}
                <div className='col-span-1 flex flex-col sm:justify-evenly mx-8 sm:mx-0 animate-[fadeIn_2s] sm:animate-[slideRightIntoPosition_2s]'>
                    <div>
                        <div className=' font-serif font-extrabold text-3xl'>
                            {data?.recipe.title}
                        </div>
                        <div>🧑‍🍳👩‍🍳 By: {user.username}</div>
                    </div>
                    
                    <div className='my-2 sm:my-0'>{data?.recipe.description}</div>
                    <div className='my-2 sm:my-0'>
                        <div>🔪 Prep Time: {data?.recipe.prep_time} minutes</div>
                        <div>⏲️ Cook Time: {data?.recipe.cook_time} minutes</div>
                        <div>Servings: {data?.recipe.servings}</div>
                    </div>
                    <div className='flex justify-start space-x-2 my-2 sm:my-0 overflow-x-auto min-h-7 max-h-7'>
                        {tagList.map((tag, index) => (
                            <div className='inline-flex items-center min-w-max' key={index}>
                                <Pill label={tag.name} color='sky'/>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 grid-rows-1 m-8'>
                {/* instructions */}
                <div className='sm:col-span-2 border-2 border-black rounded-lg bg-white max-h-max'>
                    <span className=' m-2 flex justify-center font-sans text-lg font-extrabold'>Instruction:</span>

                    {instructionList.map((inst, index) => (
                        <div key={index}>
                        <RecipeInstruction
                            step={inst.step_number}
                            instruction={inst.step_description}
                        />
                        </div>

                    ))}
                </div>
                {/* ingredients and macros cards */}
                <div className ='grid grid-cols-1 grid-rows-2 m-3'>
                    <div className='flex justify-center m-3'>
                        <RecipeMacrosCard
                            calories={macros.calories || 0}
                            protein={macros.protein || 0}
                            carbohydrates={macros.carbohydrates || 0}
                            fats={macros.fats || 0}
                        />
                    </div>
                    <div className='flex justify-center m-3'>
                        <RecipeIngredientsCard ingredients={ingredientList}/>

                    </div>

                    
                </div>
            </div>
        </div>
    )
}


export default Recipe;