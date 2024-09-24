import { RecipeIngredientProps } from "./RecipeIngredient.types";

const RecipeIngredient = ({ ingredient, amount, unit }: RecipeIngredientProps) => {

    
    return (
        <div className='grid grid-cols-10 w-auto h-auto overflow text-base bg-zinc-100 border-2 p-2 mx-2 my-1 rounded-lg'>
            <span className="col-span-8 flex justify-start items-center ml-2">
                <p>{ingredient}</p>
            </span>
            <span className='col-span-2 flex overflow-auto justify-end'>
                <p>{amount} {unit} </p> 
            </span>
        </div>
    )
}

export default RecipeIngredient;