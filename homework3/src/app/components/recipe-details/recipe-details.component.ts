import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe?: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recipeId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    const recipe = this.recipeService.getRecipeById(this.recipeId);
    if (!recipe) {
      this.router.navigate(['not-found']);
    }
    this.selectedRecipe = recipe;
  }
}
