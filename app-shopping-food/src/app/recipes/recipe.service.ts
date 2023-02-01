import {Recipe} from "./recipes.model";

export class RecipeService {

  private recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a Test',
      'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png'),
    new Recipe('A Test Recipe', 'This is a simply a Test',
      'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
