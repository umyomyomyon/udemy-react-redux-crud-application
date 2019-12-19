import React, {Component} from 'react'
import {connect} from "react-redux"

import {increment, decrement} from "../actions"

class App extends Component {
  render() {
    const props = this.props
    console.log(props)
    
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(`mapStateToProps is called.`)
  return (
    {
      value: state.count.value,
      testValue: state.hoge.value
    }
  )
}
const mapDisPatchToProps = dispatch => {
  console.log('mapDispatchToProps is called.')
  return(
    {increment: () => dispatch(increment()),
     decrement: () => dispatch(decrement())}
  )
}

export default connect(mapStateToProps, mapDisPatchToProps)(App)