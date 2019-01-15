import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burguer from '../../Components/Burguer/Burguer'
import BuildControls from '../../Components/Burguer/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burguer/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurguerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 0,
      purchaseable: false,
      purchasing: false
    }
  }

  updatePurchase (updatedIngredients) {
    const ingredients = { ...updatedIngredients }
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((sum, e) => {
        return sum + e
      }, 0)
    this.setState({ purchaseable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    // Ingredients
    const oldCounter = this.state.ingredients[type]
    const updatedCounter = oldCounter + 1
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = updatedCounter
    // Price
    const oldPrice = this.state.totalPrice
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = oldPrice + priceAddition
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchase(updatedIngredients)
  }
  removeIngredientHandler = (type) => {
    // Ingredients
    const oldCounter = this.state.ingredients[type]
    const updatedCounter = oldCounter === 0 ? oldCounter : oldCounter - 1
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = updatedCounter
    // Price
    const oldPrice = this.state.totalPrice
    const priceDeduction = INGREDIENT_PRICES[type]
    const newPrice = oldPrice - priceDeduction
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchase(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            modalClosed={this.purchaseCancelHandler} />
        </Modal>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable} 
          ordered={this.purchaseHandler}/>
      </Aux>
    )
  }
}

export default BurguerBuilder
