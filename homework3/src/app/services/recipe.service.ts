import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  listEmitter = new EventEmitter<Recipe[]>();

  recipeList: Recipe[] = [
    {
      id: 1,
      name: 'Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in hendrerit enim, eget consectetur arcu. Etiam eget nunc eget lorem elementum consequat. Curabitur vel neque tempus sapien lobortis ornare. Nam vel velit vitae odio eleifend dignissim. Sed a dolor rutrum, varius eros ac, lacinia ligula. Vivamus ex justo, interdum nec aliquet vel, tincidunt non velit. Suspendisse rhoncus odio eget gravida commodo. In at interdum quam.',
      ingredients: ['cheese', 'flour', 'tomato', 'mozzarela', 'olive oil'],
    },
    {
      id: 2,
      name: 'Gulash',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in hendrerit enim, eget consectetur arcu. Etiam eget nunc eget lorem elementum consequat. Curabitur vel neque tempus sapien lobortis ornare. Nam vel velit vitae odio eleifend dignissim. Sed a dolor rutrum, varius eros ac, lacinia ligula. Vivamus ex justo, interdum nec aliquet vel, tincidunt non velit. Suspendisse rhoncus odio eget gravida commodo. In at interdum quam.',
      ingredients: ['meat', 'tomato', 'onion'],
    },
  ];

  addNewRecipe(recipeData: Recipe) {
    this.recipeList = [...this.recipeList, recipeData];
  }

  getRecipeById(id: number) {
    return this.recipeList.find((recipe) => recipe.id === +id);
  }
}
