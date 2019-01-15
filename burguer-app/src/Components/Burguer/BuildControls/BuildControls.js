import React from 'react'
import classes from './BuildControls.module.css'
import Controls from './Controls/Controls'

const controls = [
  { label: 'salad', type: 'salad' },
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(e => (
      <Controls
        key={e.label}
        label={e.label}
        add={() => props.add(e.type)}
        remove={() => props.remove(e.type)}
        disabled={props.disabled[e.type]} />
    ))}
    <button className={classes.OrderButton}
      disabled={!props.purchaseable}>ORDER NOW</button>
  </div>
)

export default buildControls
