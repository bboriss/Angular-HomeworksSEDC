import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/interfaces/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  maxCommentLength: number = 500;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      ingredients: new FormControl([], [Validators.required]),
    });
  }

  onFormSubmit() {
    console.log(this.recipeForm.value);

    const recipeData: Recipe = {
      id: this.recipeService.recipeList.length + 1,
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      ingredients: this.recipeForm.value.ingredients.split(','),
    };
    this.recipeService.addNewRecipe(recipeData);
    this.recipeForm.reset();
    this.router.navigate(['recipes']);

    console.log(this.recipeService.recipeList);
  }
}
