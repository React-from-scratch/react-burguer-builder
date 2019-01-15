import React from 'react'
import classes from './Controls.module.css'

const controls = (props) => (
  <div className={classes.controls}>
    <div className={classes.label}>{props.label}</div>
    <button className={classes.less}
      onClick={props.add}>More</button>
    <button className={classes.more}
      onClick={props.remove}
      disabled={props.disabled}>Less</button>
  </div>
)

export default controls
