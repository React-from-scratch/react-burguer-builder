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
    {controls.map(e => (
      <Controls key={e.label} label={e.label} add={props.add} />
    ))}
  </div>
)

export default buildControls
