import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/fetchRecipes'
import RecipeInput from '../components/RecipeInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends Component {
    
    componentDidMount() {
        fetchRecipes()
    }

    render() {
        console.log(this.props.recipes)
        return(
            <div>
                <p>RecipesContainer</p>
                <RecipeInput />
                {/* <Recipes recipes={this.props.recipes} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)