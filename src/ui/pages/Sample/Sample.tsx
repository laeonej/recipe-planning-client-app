import '@ui/index.css';

import { NavBar, RecipeTile } from '@ui/components';
// import useGetUser from '@src/ui/hooks/useGetUser';


const Sample = () => {

    // const { isLoading: isLoadingData, error: isError, data} = useGetUser();

    return (
        // <TextInput type="text" label="123" subLabel='AAAA' subLabelLink='#'/>
        <div className=' h-screen from-orange-300 to-yellow-200 bg-gradient-to-b'>
            <NavBar/>
            <div className='flex justify-center p-5'>
                <RecipeTile 
                    title="Title of Recipe" 
                    author='Recipe Author Name' 
                    cookTime={10} 
                    rating={3.4} 
                    tags={["spicy", "korean"]}
                    recipeId="123"
                />
            </div>
            
        </div>
        
    );
};

export default Sample