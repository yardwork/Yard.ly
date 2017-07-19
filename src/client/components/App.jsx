import React, { Component } from 'react'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { browserHistory, Link } from 'react-router'

import Home from './home.jsx'
import NavBar from './navBar.jsx'
import AddressFormParent from './addressFormParent.jsx'
import WorkerList from './workerList.jsx'
import WorkerProfile from './workerProfile.jsx'
import Login from './login.jsx'

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
      <Login />

      </div>
    )
  }
}

export default App
