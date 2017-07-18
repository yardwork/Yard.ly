import React from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'

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
		this.setState({ inputValue: event.target.value })
	}

	handleSearch(e) {
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
			<div>
				<div id="bg">
					<img
						src="http://hires.photospublic.com/PP13561214-Beautiful-green-Lawn-viewed-from-human-perspective.jpg"
						alt=""
					/>
				</div>
				<div className="home-page-container">
					<h1>things</h1>
					<div className="col-lg-6">
						<div className="input-group landing-search">
							<input
								type="text"
								className="form-control"
								placeholder="Find workers in your area"
								value={this.state.inputValue}
								onChange={this.handleChange}
							/>
							<span className="input-group-btn">
								<button
									className="btn btn-default"
									type="button"
									value="oh god"
									onClick={this.handleSearch}
								>
									Go!
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search
