import { RecipeInstructionProp } from "./RecipeInstruction.types";

const RecipeInstruction = ({ instruction, step }: RecipeInstructionProp) => {


    return (
        <div className='grid grid-cols-10 w-auto h-auto overflow text-base bg-white border-2 p-2 mx-2 my-1 rounded-lg'>
            <span className="col-span-1 flex justify-center items-center ">
                <p>{step}.</p>
            </span>
            <span className='col-span-9'>
                <p>{instruction}</p>
            </span>
             
        </div>
    )
}

export default RecipeInstruction;