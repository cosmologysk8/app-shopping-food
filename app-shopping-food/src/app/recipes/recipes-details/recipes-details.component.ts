import { Recipe } from './../recipes.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent {

  @Input() recipe: Recipe;

}
