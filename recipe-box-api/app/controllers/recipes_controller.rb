class RecipesController < ApplicationController

    def index
        recipes = Recipe.all 
        render json RecipeSerializer.new(recipes)
    end

    def show
        recipe = Recipe.find_by(title: recipe_params.title)
        render json RecipeSerializer.new(recipe)
    end

    def create
        recipe = Recipe.create(recipe_params)
        render json RecipeSerializer.new(recipe)
    end
end