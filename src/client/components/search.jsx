import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import WorkerList from './workerList.jsx'


class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inputValue: '',
			workers: this.props.workers,
		}

		this.handleSearch = this.handleSearch.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}
	handleChange(event) {
		console.log(event)
		this.setState({ inputValue: event.target.value })
	}

	handleSearch(e) {
		console.log('oh god hello world')
		e.preventDefault()
		console.log(e, 'hi')
		fetch(`http://localhost:3000/api/filter/${this.state.inputValue}`, {
			method: 'GET',
		})
			.then(response => {
				console.log('response', response)
				return response.json()
			})
			.then(Json => {
			  this.props.setWorkers(Json)
			})
	}
	render() {
    return (
				<form className="navbar-form navbar-left" role="search">
				  <div className="form-group">
				    <input type="text" className="form-control nav-search" placeholder="Search for workers" value={this.state.inputValue} onChange={this.handleChange}/>
				  </div>
				  	<button className="btn btn-primary" onClick={this.handleSearch}>Submit</button>
				</form>
		)
	}
}

export default Search
