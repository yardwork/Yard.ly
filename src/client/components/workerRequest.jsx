// import React from 'react'
//
// const WorkerRequest = ({
// 	jobname,
// 	date,
// 	time,
// 	rate,
// 	hours,
// 	address,
// 	equipment,
// 	services,
//   id,
// 	accepted,
// 	type,
// }) => {
// 	const equipmentItems = Object.keys(equipment).map(function(key) {
// 		var e
// 		if (equipment[key] === true) {
// 			e = key
// 		}
// 		return (
// 				<p>{e}</p>
// 		)
// 	})
// 	const servicesItems = Object.keys(services).map(function(key) {
// 		var e
// 		if (services[key] === true) {
// 			e = key
// 		}
// 		return (
// 				<p>{e}</p>
// 		)
// 	})
// 	return (
// 		<div>
// 			<div className="panel-heading">
// 				<h3 className="panel-title">{`${jobname}`}</h3>
// 			</div>
// 			<div className="panel-body">
// 				<div className="panel-contact-info">
// 					<p>{date} at {time}</p>
// 					<p>{rate} $/hr for {hours} hours = ${hours * rate}</p>
// 					<p>
// 						Address: {address.address} City: {address.city} State:{' '}
// 						{address.state} Zip: {address.zipcode}
// 					</p>
// 					<p>Requested Services: {servicesItems}</p>
// 					<p>Requested Equipment: {equipmentItems}</p>
// 				</div>
//         { type === 'WORKER' ?
// 				<button onClick={ () => this.acceptRequest(accepted)}>
// 					{accepted ? 'Decline Job' : 'Accept Job'}
// 				</button> : '' }
// 			</div>
// 		</div>
// 	)
// }
//
// export default WorkerRequest

import React from 'react'
import { requestsUpdateRoute } from '../../server/routes.js'

class WorkerRequest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			jobname: props.jobname,
			date: props.date,
			time: props.time,
			rate: props.rate,
			hours: props.hours,
			address: props.address,
			equipment: props.equipment,
			services: props.services,
			accepted: this.props.accepted,
			id: props.id,
			wid: props.wid,
			uid: props.uid,
			request: props.request,
		}
		this.equipmentItems = Object.keys(props.equipment).map(function(key) {
			var e
			if (props.equipment[key] === true) {
				e = key
			}
			return <p>{e}</p>
		})
		this.servicesItems = Object.keys(props.services).map(function(key) {
			var e
			if (props.services[key] === true) {
				e = key
			}
			return <p>{e}</p>
		})
		this.acceptRequest = this.acceptRequest.bind(this)
		this.updateRequest = this.updateRequest.bind(this)
	}

	updateRequest(requestId, request) {
		fetch('/api'.concat(requestsUpdateRoute(requestId)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(request),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(request => {
				console.log('request~~~~~', request)
				if (request) {
					this.setState({ request: request, accepted: request.accepted }, () =>
						console.log('this.state after update', this.state.request),
					)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}

	acceptRequest(accepted) {
		var request = this.props.request
		request.accepted = !accepted
		this.setState(
			{
				request: request,
				accepted,
			},
			() => this.updateRequest(this.state.id, this.state.request),
		)
	}
	render() {
		return (
			<div className="card-container front">
				<div className="card cover">
					<div className="content">
							<div className="panel-contact-info">
								<div className="col-md-1">
									<br />
									<p className="calendar">
										{this.props.dt[0]}<em>{this.props.dt[1]}</em>
									</p>
								</div>
								<div className="content">
									<h3>{this.props.jobname}</h3>
								<p>
									Worker: {this.props.request.workerFirst} Homeowner:{' '}
									{this.props.request.userFirst}
								</p>
								<p>{this.props.date} at {this.props.time}</p>
								<p>
									{this.props.rate} $/hr for {this.props.hours} hours = ${this.props.hours * this.props.rate}
								</p>
							</div>
					</div>
				</div>
						<div><h3>Requested Services: </h3>{this.servicesItems}</div>
						<div><h3>Requested Equipment: </h3>{this.equipmentItems}</div>
						<p>
							Address: {this.props.address.address} City:{' '}
							{this.props.address.city} State:{this.props.address.state}
							Zip: {this.props.address.zipcode}
						</p>
						<p>{this.state.accepted ? 'Accepted' : 'Being Reviewed'}</p>
					</div>
				{this.props.type === 'WORKER'
					? <button onClick={() => this.acceptRequest(this.state.accepted)}>
							{this.state.accepted ? 'Decline Job' : 'Accept Job'}
						</button>
					: ''}
			</div>
		)
	}
}

export default WorkerRequest
