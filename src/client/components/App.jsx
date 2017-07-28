import React, { Component } from 'react'
import axios from 'axios'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { browserHistory, Link } from 'react-router'

import Home from './home.jsx'
import NavBar from './navBar.jsx'
import UserProfile from './userProfile.jsx'
import WorkerList from './workerList.jsx'
import WorkerProfile from './workerProfile.jsx'
import Login from './login.jsx'
import Search from './search.jsx'
import MapList from './mapList.jsx'

const user = {
  __v: 0,
  username: 'stuart',
  password: 'stuart',
  _id: '5970ae7ae2aa44b1b406fdd6',
  addresses: []
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workers: [],
      // user: {
      //   __v: 0,
      //   username: 'stuart',
      //   password: 'stuart',
      //   _id: '5970ae7ae2aa44b1b406fdd6',
      //   addresses: []
      // },
      userType: "placeholder",
    }
    this.setUserType = this.setUserType.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.setWorkers = this.setWorkers.bind(this)
  }

  setUserType(type) {
    this.setState({userType: type})
  }

  handleLogout() {
    axios({
      method: 'GET',
      url: '/api/logout',
    })
    .then( () => {
      this.setState({userType: undefined})
      console.log('LOGOUT',this.state)
    })
  }

  setWorkers(workers) {
    console.log(workers, 'workers from home')
    this.setState({
      workers: workers,
    }, ()=> console.log('Home state!!~~~~', this.state.workers))
  }

  onWorkerClick() {
    $('#sign-in-modal').modal('show')
    alert('You need to have an account to view a workers profile')
  }

  componentDidMount() {
    axios({
			method: 'get',
			url: '/api/session',
		}).then((res) => {
      console.log(res.data.type)
      this.setUserType(res.data.type)
    })

  }

  render() {
    return (
      <div>
      <BrowserRouter history={browserHistory}>
        <div>
          <NavBar userType={this.state.userType} handleLogout={this.handleLogout} setWorkers={this.setWorkers}/>
          <Switch>
            {/* <Route path="/workers" render={()=><WorkerList workers={this.state.workers}/>}/> */}
            <Route path="/profile/:id" component={WorkerProfile} />
            <Route path="/user" render={()=><UserProfile user={this.state.user} />}/>
            <Route path="/map" render={()=><MapList />}/>
            <Route
              path="/"
              render={() => <WorkerList userType={this.state.userType} onWorkerClick={this.onWorkerClick} workers={this.state.workers} setWorkers={this.setWorkers}/>}
            />
          </Switch>
          {/* <WorkerList workers={this.props.workers}/> */}
        </div>
      </BrowserRouter>
      <Login setUserType={this.setUserType} userType={this.state.userType}/>

      </div>
    )
  }
}

export default App
