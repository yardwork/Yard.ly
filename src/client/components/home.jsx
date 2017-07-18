import React from 'react'
<<<<<<< HEAD
import WorkerList from './workerList.jsx'
import WorkerProfile from './workerProfile.jsx'
import addressFormParent from './addressFormParent.jsx'
import Search from './search.jsx'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { WORKERS_INDEX } from '../../server/routes.js'

class HomePage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inputValue: '',
			workers: this.props.workers,
		}
		this.getWorkers = this.getWorkers.bind(this)
    this.setWorkers = this.setWorkers.bind(this)
	}
	getWorkers() {
		fetch('/api'.concat(WORKERS_INDEX), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				console.log('~~~~~~~workers', data)
				this.setState({ workers: data })
			})
			.then(() => console.log('~~~~~~state', this.state))
	}
  setWorkers(workers) {
    console.log(workers, 'workers from home')
    this.setState({
      workers: workers,
    }, ()=> console.log('Home state!!~~~~', this.state.workers))
  }
  ComponentDidMount() {
    this.getWorkers()
  }
	render() {
		return (
			<div>
				<div id="bg">
					<img
						src="http://hires.photospublic.com/PP13561214-Beautiful-green-Lawn-viewed-from-human-perspective.jpg"
						alt=""
					/>
				</div>
				<div className="home-page-container">
					<h1>things</h1>
					<BrowserRouter>
						<Switch>
							<Route
								path="/workers"
								render={() => <WorkerList workers={this.state.workers} />}
							/>
							<Route
								path="/profile"
								render={() => <WorkerProfile worker={this.props.workers[0]} />}
							/>
							<Route
								path="/address"
								render={() => <AddressFormParent user={this.props.user} />}
							/>
              <Route
                path="/"
                render={() => <Search workers={this.state.workers} setWorkers={this.setWorkers} />}
              />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		)
	}
}
=======

const HomePage = ( { workers } ) =>
  (<div>
    <div id="bg">
      <img src="http://hires.photospublic.com/PP13561214-Beautiful-green-Lawn-viewed-from-human-perspective.jpg" alt="" />
    </div>
    <div className="home-page-container">
      <h1>things</h1>
      <div className="col-lg-6">
        <div className="input-group landing-search">
          <input type="text" className="form-control" placeholder="Find workers in your area" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
  </div>)
>>>>>>> Adds navbar and front end routes

export default HomePage
