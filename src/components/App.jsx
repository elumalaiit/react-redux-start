import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import * as action from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World'
    }
  }

  componentDidMount() {
    this.props.dispatch(action.displayHello("Hello Super Hero!"));
  }
  
  render() {
    const { data } = this.props
    return (
      <div>{data.title}</div>
    );
  }
}

const mapStateToProps = ({ rootState }) => {
  return { data: rootState }
}

export default connect(mapStateToProps, null)(App)

