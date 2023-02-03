import { Recipe } from './../recipes.model';
import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {toJSDate} from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit{

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
