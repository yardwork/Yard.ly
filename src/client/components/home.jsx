import React, { Component } from 'react'
import WorkerList from './workerList.jsx'
import WorkerProfile from './workerProfile.jsx'
import addressFormParent from './addressFormParent.jsx'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      workers: this.props.workers
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSearch(e) {
    fetch(`http://localhost:3000/api/filter/${this.state.inputValue}`, {
      method: 'GET'
    })
      .then((response) => {
        console.log('asf', response)
        return response.json()
      })
      .then((Json) => {
        console.log(Json)
        this.setState((state) => ({ workers: Json}))
      })
      // .then(responseJson) => {
      //   console.log(responseJson, ' will it work??')
      // }

    // this.setState((state) => ({ workers: this.state.workers.concat({
    //   __v: 0,
    //   username: '',
    //   password:'',
    //   _id: '',
    //   addresses: [
    //     {
    //       zipcode: '',
    //       state: '',
    //       city: '',
    //       address: '',
    //     },
    //   ],
    // })}))
  }

  render() {
    return (<div>
      <div id="bg">
        <img src="http://hires.photospublic.com/PP13561214-Beautiful-green-Lawn-viewed-from-human-perspective.jpg" alt="" />
      </div>
      <div className="home-page-container">
        <h1>things</h1>
        <div className="col-lg-6">
          <div className="input-group landing-search">
            <input type="text" className="form-control" placeholder="Find workers in your area" value={this.state.inputValue} onChange={this.handleChange}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" value="oh god" onClick={this.handleSearch}>Go!</button>
            </span>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/workers" render={()=><WorkerList workers={this.state.workers}/>}/>
            <Route path="/profile" render={()=><WorkerProfile worker={this.props.workers[0]}/>}/>
            <Route path="/address" render={()=><AddressFormParent user={this.props.user} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>)
  }
}

export default HomePage
