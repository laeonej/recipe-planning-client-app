import { Card } from "@ui/components";
import { RecipeMacrosCardProps } from "./RecipeMacrosCard.types";

const RecipeMacrosCard = ({calories, protein, carbohydrates, fats}: RecipeMacrosCardProps) => {

    return (
        <Card maxWidthSize="small">
            <div className="grid grid-cols-3">
                    <div className=" flex justify-start mx-2">
                    📍
                    </div>
                    <div className="flex justify-center">
                    <p className="m-2 flex justify-center font-sans text-lg font-extrabold">
                    Macros 
                    </p>
                    </div>
                    <div className="flex justify-end mx-2">
                    📍
                    </div>
                </div>
            <div className="flex justify-normal mx-4 mb-3 overflow-auto">
                <ul>
                    <li>🍽️ Calories: {calories}</li>
                    <li>🥩 Protein: {protein}g</li>
                    <li>🍞 Carbohydrates: {carbohydrates}g</li>
                    <li>🧈 Fats: {fats}g</li>
                </ul>
            </div>
        </Card>
    );

}


export default RecipeMacrosCard