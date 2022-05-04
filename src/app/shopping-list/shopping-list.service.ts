import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomato',10)
  ];
  getIngredient() {
    return this.ingredients
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    // this.ingredients = [...this.ingredients, ingredient]
    console.log('this.ingredients', this.ingredients)
  }
}
