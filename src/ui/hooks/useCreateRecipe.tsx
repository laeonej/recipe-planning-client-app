import { useMutation } from "react-query";
import RecipeService, { RecipeBody } from "@service/recipeService";

const useRecipeCreate = () => {
    const {mutate: create, isLoading } = useMutation(
        async ({recipe, ingredientList, instructionList, tagList, macros}: RecipeBody) => RecipeService.createRecipe({recipe, ingredientList, instructionList, tagList, macros})
    )

    return {
        create,
        isLoading
    };
};

export default useRecipeCreate