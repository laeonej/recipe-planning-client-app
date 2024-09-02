import { NavBar, Pill, RecipeInstruction } from '@src/ui/components';
import { RecipeMacrosCard } from './RecipeMacrosCard';
import '@ui/index.css'
import { RecipeIngredientsCard } from './RecipeIngredientsCard';

const Recipe = () => {

    const sampleIngredient = [
        {
            'name': 'tomato',
            'amount': 5,
            'unit': 'Count'
        },
        {
            'name': 'Sugar',
            'amount': 10,
            'unit': 'Grams'
        },
    ]

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
                        Halal Truck Chicken And Rice
                        </div>
                        <div>🧑‍🍳👩‍🍳 By: Author</div>
                    </div>
                    
                    <div className='my-2 sm:my-0'>Description of the dish itself. Really really tasty</div>
                    <div className='my-2 sm:my-0'>
                        <div>🔪 Prep Time: 5 Minutes</div>
                        <div>⏲️ Cook Time: 5 Minutes</div>
                    </div>
                    <div className='flex justify-start my-2 sm:my-0'>
                        <Pill label='Gluten Free' color='sky'/> 
                        <Pill label='Halal' color='sky'/>
                        <Pill label='Spicy' color='sky'/>
                    </div>
                </div>
                
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-3 grid-rows-1 m-8'>
                {/* instructions */}
                <div className='sm:col-span-2 border-2 border-black rounded-lg bg-white'>
                    <span className=' m-2 flex justify-center font-sans text-lg font-extrabold'>Instruction:</span>
                    <RecipeInstruction
                     step='1'
                     instruction='Wash ingredient'
                    
                    />
                    <RecipeInstruction
                     step='2'
                     instruction='Cut ingredient dnbaidbafbausfvuaifvavksufvfuiavsfvaofsyvouasvfouy asdkjb asdnijabvuva habdbasudbka c' 
                    
                    />
                </div>
                {/* ingredients and macros cards */}
                <div className ='grid grid-cols-1 grid-rows-2 m-3'>
                    <div className='flex justify-center m-3'>
                        <RecipeMacrosCard
                            calories={1}
                            protein={2}
                            carbohydrates={5}
                            fats={10}
                        />
                    </div>
                    <div className='flex justify-center m-3'>
                        <RecipeIngredientsCard ingredients={sampleIngredient}/>

                    </div>

                    
                </div>
            </div>
        </div>
    )
}


export default Recipe;