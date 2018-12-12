import { Component } from '@angular/core';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ShoppingListService, RecipeService ]
})
export class AppComponent {

	loadedFeature = 'recipe';

	constructor(private recipeService : RecipeService, private shoppingListService : ShoppingListService) {}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
