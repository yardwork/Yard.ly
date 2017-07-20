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
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  radioButtonHandler(e) {
    console.log(e.target)
    this.setState({
      checked: e.target.value
    });
    setTimeout(() => {console.log(this.state)}, 2000)
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
    console.log(this.state)
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
    console.log(this.state)
  }

  handleLogin(e) {
    if (this.state.checked === 'worker') {
      console.log('We are going to fetch')
      fetch('/api/workers/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })

      })
    }
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
                  <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsernameChange}/>
                  <input type="text" className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={this.handleLogin}>
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
