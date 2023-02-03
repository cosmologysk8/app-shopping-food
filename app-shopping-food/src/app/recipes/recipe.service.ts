import {Recipe} from "./recipes.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simply a Test',
      'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('A Test Recipe',
      'This is a simply a Test',
      'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Buns', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  gerRecipe(index: number){
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
