import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      checked: ''
    }
    this.radioButtonHandler = this.radioButtonHandler.bind(this)
  }

  radioButtonHandler(e) {
    console.log(e.target)
    this.setState({
      checked: e.target.value
    });
    setTimeout(() => {console.log(this.state)}, 2000)
  }

  render() {
    return (
    <div
      className="modal fade bs-example-modal-sm"
      id="sign-in-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Sign In
            </h4>
          </div>
          <div className="modal-body">

          <div className="btn-group" data-toggle="" onClick={this.radioButtonHandler}>
            <label className="btn btn-primary active">
              <input type="radio" name="options" value="user"/> User
            </label>
            <label className="btn btn-primary">
              <input type="radio" name="options" value="worker"/> Worker
            </label>
          </div>
                  <input type="text" className="form-control" placeholder="Username"/>
                  <input type="text" className="form-control" placeholder="Password"/>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Login
