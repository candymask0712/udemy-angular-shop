import {Recipe} from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('A test Recipe-1', 'This is simply a test-1', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg'),
    new Recipe('A test Recipe-2', 'This is simply a test-2', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg')]

  getRecipes() {
    return this.recipes.slice();
  }
}
