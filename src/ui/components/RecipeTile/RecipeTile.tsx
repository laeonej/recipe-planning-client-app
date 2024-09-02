import { Pill } from '@ui/components'
import routes from '@ui/routes/routes';
import { RecipeTileProp } from './RecipeTile.types';


import { MdOutlineTimer } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { 
    useNavigate,
    generatePath
} from "react-router-dom";


const RecipeTile = ({
    title,
    imageSrc='https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?resize=400x300&vertical=center',
    author,
    cookTime,
    rating,
    tags,
    recipeId
}: RecipeTileProp) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(
            generatePath(routes.RECIPE, { recipeId: recipeId })
        );
    };

    return (
        <div className=" bg-white w-64 h-64 rounded-lg border-2 border-solid border-black hover:border-red-500 hover:cursor-pointer" onClick={handleClick}>
            <div className="relative h-2/3 w-full rounded-t-l">
                <div className='absolute h-full w-full overflow-hidden'>
                    <img className="rounded-t-md w-full h-full object-fill" src={imageSrc} alt="recipe cover"/>
                </div>
                <div className="absolute w-full h-full flex justify-end">
                    <Pill label={`✍:${author}`} color='orange'></Pill>
                </div>
                <div className='absolute w-full h-full flex items-end p-1'>
                    <Pill label={`${cookTime} min`} color='orange'><MdOutlineTimer/></Pill>
                    <Pill label={rating.toString()} color='orange'><BsFillStarFill fill='yellow'/></Pill>
                </div>
            </div>
        
            <div className=" h-1/3 w-full bg-gray-300 rounded-b-md border-t-2 border-black">
                <div className=" p-2 h-2/3 w-full text-sm overflow-hidden">
                    {/* 2 lines 27 character limit per line. 27 character word limit */}
                    <p className=" h-full w-full overflow-hidden">{title}</p>
                </div>
                
                <div className=" h-1/3 flex justify-end overflow-hidden pb-1 px-1">
                    {/* 2 - 3 tags displayed */}
                    {tags.map(
                        (tagName) => (
                            <Pill key={tagName} label={tagName} color='sky'/>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}


export default RecipeTile;