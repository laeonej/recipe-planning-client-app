type Ingredient = {
    name: string;
    amount: number;
    unit: string;
}

export type RecipeIngredientsCardProps = {
    ingredients: Ingredient[];

};