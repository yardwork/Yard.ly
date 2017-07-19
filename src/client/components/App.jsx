import React, { Component } from 'react'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { browserHistory, Link } from 'react-router'

import Home from './home.jsx'
import NavBar from './navBar.jsx'
import AddressFormParent from './addressFormParent.jsx'
import WorkerList from './workerList.jsx'
import WorkerProfile from './workerProfile.jsx'

const user = {
  __v: 0,
  username: 'afylan2',
  password: '1L4bPr2',
  _id: '5967cae93f9ebb1cc30f37a3',
  addresses: []
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workers: []
    }
  }

  componentDidMount() {
    fetch('/api/workers', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((array) => {
      console.log('state is', this.state)
      this.setState({ workers: array })
      console.log('state is', this.state)
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter history={browserHistory}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/workers" render={()=><WorkerList workers={this.state.workers}/>}/>
            <Route path="/profile/:id" component={WorkerProfile} />
            <Route path="/user" render={()=><AddressFormParent user={user} />}/>
            <Route path="/" render={()=><Home workers={this.state.workers} />}/>
          </Switch>
        </div>
      </BrowserRouter>

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

              <div className="btn-group" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input type="radio" name="options" id="option1" autoComplete="off" checked/> User
                </label>
                <label className="btn btn-primary">
                  <input type="radio" name="options" id="option2" autoComplete="off"/> Worker
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
      </div>
    )
  }
}

export default App
