import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burguer from '../../Components/Burguer/Burguer'
import BuildControls from '../../Components/Burguer/BuildControls/BuildControls'

class BurguerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }
  }

  addIngredientHandler = (type) => {
    const oldIngredients = this.state.ingredients[type]
    const updatedIngredients = oldIngredients + 1
    console.log(oldIngredients)
    this.setState = {ingredients : updatedIngredients}
  }

  render () {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}/>
      </Aux>
    )
  }
}

export default BurguerBuilder
