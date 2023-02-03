import { OnInit} from '@angular/core';
import { Recipe } from './../recipes.model';
import { Component } from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{


  constructor(private recipeService : RecipeService) {
  }

  recipes : Recipe[] = []

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }



}
