import React from 'react'
import classes from './Modal.module.css'

const modal = (props) => (
  <div className={classes.Modal}
    disabled={props.purchaseable}>{props.children}</div>
)

export default modal
