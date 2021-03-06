import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((ingKeys, i) => {
      return (
        <li key={i}>
          <span style={{ textTransform: 'capitalize' }}>{ingKeys}</span>: {props.ingredients[ingKeys]}
        </li>
      )
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button onClick={props.modalClosed} />
    </Aux>
  )
}

export default orderSummary
