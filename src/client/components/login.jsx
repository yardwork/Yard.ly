import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      checked: '',
      isLogin: true
    }
    this.radioButtonHandler = this.radioButtonHandler.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleFNChange = this.handleFNChange.bind(this)
    this.handleLNChange = this.handleLNChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.toggleAuthType = this.toggleAuthType.bind(this)
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

  handleFNChange(e) {
    this.setState({firstName: e.target.value})
    console.log(this.state)
  }

  handleLNChange(e) {
    this.setState({lastName: e.target.value})
    console.log(this.state)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
    console.log(this.state)
  }

  handleLogin(e) {
    console.log('We are going to fetch',`/api/${this.state.checked}s/${this.state.isLogin ? 'login' : 'signup'}`)
    fetch(`/api/${this.state.checked}s/${this.state.isLogin ? 'login' : 'signup'}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contactInfo: {email: this.state.email},
      })
    })
    .then( (res) => {
      console.log(res)
      return res.json()})
    .then((data) => {
      console.log('userType', data.type)
      this.props.setUserType(data.type)
      $('#sign-in-modal').modal('hide')

    }).catch((err) => {
      console.log(err)

    })
  }

  toggleAuthType() {
    this.setState({isLogin: !this.state.isLogin})
    console.log('toggled authtype', this.state.isLogin)

  }

  render() {
    return (
    <div
      className="modal fade modal-inverse"
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
            <h4 className="modal-title" id="myModalLabel" onClick={this.toggleAuthType}>
              {this.state.isLogin
                ? <span>Need an account? Click here</span>
                : <span>Already have an account? Click here</span>}
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
                  {this.state.isLogin ? "" : <div>
                    <input type="text" className="form-control" placeholder="First Name" onChange={this.handleFNChange}/>
                    <input type="text" className="form-control" placeholder="Last Name" onChange={this.handleLNChange}/>
                    <input type="text" className="form-control" placeholder="Email" onChange={this.handleEmailChange}/>
                  </div>
                  }

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
