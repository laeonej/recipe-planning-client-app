type Ingredient = {
    ingredient: string,
    amount: number,
    unit: string
}

export type RecipeCreateIngredientsProps = {
    ingredientList: Ingredient[]
    setIngredientList: React.Dispatch<React.SetStateAction<Ingredient[]>>
}