import { useQuery } from "react-query";
import RecipeService from "@service/recipeService";


const useGetRecipe = (recipeId: number) => {
    const { isLoading, error, data } = useQuery(['getRecipe', recipeId],
        async () => RecipeService.getRecipe(recipeId)
    );

    return {
        isLoading,
        error,
        data
    };
};

export default useGetRecipe;