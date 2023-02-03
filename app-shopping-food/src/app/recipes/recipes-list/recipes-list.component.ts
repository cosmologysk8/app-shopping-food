import { OnInit} from '@angular/core';
import { Recipe } from './../recipes.model';
import { Component } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{


  constructor(private recipeService : RecipeService, private router: Router,
              private route: ActivatedRoute) {
  }

  recipes : Recipe[] = []

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
