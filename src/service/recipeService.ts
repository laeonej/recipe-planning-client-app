import { Axios, AxiosInstance } from "axios";
import axiosClient from "./axiosClient"

export type RecipeCreateBody = {
    title: string,
    description: string,
    prep_time: number,
    cook_time: number
}

export type IngredientBody = {
    ingredient: string,
    amount: number,
    unit: string
}

export type MacrosBody = {
    calories: number,
    protein: number,
    carbohydrates: number,
    fats: number
}

export type RecipeBody = {
    recipe: RecipeCreateBody,
    ingredientList: IngredientBody[],
    instructionList: string[],
    tagList: string[],
    macros: MacrosBody
}

export type RecipeResponse = {
    recipe: RecipeCreateBody
}

class RecipeService {
    http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    };

    async createRecipe(recipeData: RecipeBody): Promise<RecipeResponse> {
        try {
            const response = await this.http.post('/recipe', {
                recipe: recipeData.recipe,
                ingredients_list: recipeData.ingredientList,
                instructions_list: recipeData.instructionList,
                tags_list: recipeData.tagList,
                macros: recipeData.macros

            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
            )
            
            return response.data
        } catch (error: any) {
            const errorMessage = "Failed to Create Recipe"
            throw new Error(errorMessage)
        }
    }
};

const recipeService = new RecipeService(axiosClient.getInstance());
export default recipeService;