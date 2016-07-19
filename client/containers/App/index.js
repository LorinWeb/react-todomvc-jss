
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import styles from './style'
import jss from 'jss';
import useSheet from 'react-jss'
import camelCase from 'jss-camel-case'
import nested from 'jss-nested'

// `jss` is a singleton
jss.use(camelCase()) // adds support for fontWeight => font-weight
jss.use(nested()) // adds support for '&' to extract nested style objects

@useSheet(styles)
class App extends Component {

  render() {
    const { todos, actions, children, sheet: {classes} } = this.props
    return (
      <div>
        <div className={classes.normal}>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
          {children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
