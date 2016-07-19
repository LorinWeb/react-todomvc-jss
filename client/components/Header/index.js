
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import useSheet from 'react-jss'
import styles from './style'

@useSheet(styles)
class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    const {classes} = this.props.sheet
    return (
      <header>
        <h1 className={classes.h1}>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
