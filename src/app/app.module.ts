import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.modules';
import { ShoppingListModule } from './shopping-list/shopping-list.module'
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';

import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SignupComponent,
		SigninComponent
	],
	imports: [
		BrowserModule,
		RecipesModule,
		ShoppingListModule,
		SharedModule,
		AppRoutingModule,
		HttpModule
		
	],
	providers: [ RecipeService, DataStorageService, ShoppingListService, AuthService, AuthGuardService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
