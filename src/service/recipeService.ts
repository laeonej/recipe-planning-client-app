import { AxiosInstance } from "axios";
import axiosClient from "./axiosClient"



export type IngredientBody = {
    ingredient: string,
    amount: number,
    unit: string
}

export type InstructionBody = {
    step_number: number,
    step_description: string
}

export type TagBody = {
    name: string
}

export type MacrosBody = {
    calories: number,
    protein: number,
    carbohydrates: number,
    fats: number
}

export type RecipeCreateBody = {
    title: string,
    description: string,
    prep_time: number,
    cook_time: number
}

export type RecipeBody = {
    recipe: RecipeCreateBody,
    ingredientList: IngredientBody[],
    instructionList: string[],
    tagList: string[],
    macros: MacrosBody
}

export type RecipeDetail = {
    author_id: number,
    cook_time: number,
    description: string,
    id: number,
    prep_time: number,
    rating: number,
    servings: number,
    title: string
}


export type GetRecipeResponse = {
    recipe: RecipeDetail,
    ingredients: IngredientBody[],
    macros: MacrosBody,
    instructions: InstructionBody[],
    tags: TagBody[]
}

class RecipeService {
    http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    };

    async getRecipe(recipeId: number) : Promise<GetRecipeResponse> {
        try {
            const response = await this.http.get('/recipe', {
                params: {
                    recipe_id: recipeId
                }
            });
            return response.data;

        } catch (error: any) {
            const errorMessage = "Failed To Retreive Recipe";
            throw new Error(errorMessage);
        }
    }

    async createRecipe(recipeData: RecipeBody): Promise<RecipeBody> {
        try {
            const response = await this.http.post('/recipe', {
                withCredentials: true,
                recipe: recipeData.recipe,
                ingredients_list: recipeData.ingredientList,
                instructions_list: recipeData.instructionList,
                tags_list: recipeData.tagList,
                macros: recipeData.macros,

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