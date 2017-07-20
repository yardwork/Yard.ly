import React, { Component } from 'react'

class PickaDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }
  render() {
    return(
      <div>
        <h1>This is a Date picker</h1>
      </div>
    )
  }
}

export default PickaDate
