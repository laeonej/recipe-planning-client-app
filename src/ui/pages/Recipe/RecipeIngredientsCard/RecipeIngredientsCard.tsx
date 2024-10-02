import { Card } from "@ui/components";
import { RecipeIngredientsCardProps } from "./RecipeIngredientsCard.types";

const RecipeIngredientsCard = ({ingredients}: RecipeIngredientsCardProps) => {

    return (
        <Card maxWidthSize="medium">
            <div className="grid grid-cols-3">
                    <div className=" flex justify-start mx-2">
                    🛒
                    </div>
                    <div className="flex justify-center">
                    <p className="m-2 flex justify-center font-sans text-lg font-extrabold">
                    Ingredients 
                    </p>
                    </div>
                    <div className="flex justify-end mx-2">
                    🛒
                    </div>
                </div>
            <div className="grid grid-cols-1 mx-4 mb-3 overflow-auto divide-y">
                {ingredients.map(
                    (ingredient) => (
                        <div className="grid grid-cols-3" key={ingredient.ingredient}>
                            <li className="col-span-2 overflow-auto my-1">{ingredient.ingredient}</li>
                            <span className="flex justify-end items-center my-1">{ingredient.amount} {ingredient.unit}</span>
                        </div>
                    )
                )}
            </div>
        </Card>
    );
}

export default RecipeIngredientsCard;