import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipes.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a Test', 
    'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png'),
    new Recipe('A Test Recipe', 'This is a simply a Test', 
    'https://img.delicious.com.au/00wtXzTe/w759-h506-cfill/del/2022/08/ramenara-ramen-carbonara-172843-2.png')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
