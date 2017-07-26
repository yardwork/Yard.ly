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

// import React from 'react'
// import { requestsUpdateRoute } from '../../server/routes.js'
//
// class WorkerRequest extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			jobname: props.jobname,
// 			date: props.date,
// 			time: props.time,
// 			rate: props.rate,
// 			hours: props.hours,
// 			address: props.address,
// 			equipment: props.equipment,
// 			services: props.services,
// 			accepted: this.props.accepted,
// 			id: props.id,
// 			wid: props.wid,
// 			uid: props.uid,
// 			request: props.request,
// 		}
// 		this.equipmentItems = Object.keys(props.equipment).map(function(key) {
// 			var e
// 			if (props.equipment[key] === true) {
// 				e = key
// 			}
// 			return <p>{e}</p>
// 		})
// 		this.servicesItems = Object.keys(props.services).map(function(key) {
// 			var e
// 			if (props.services[key] === true) {
// 				e = key
// 			}
// 			return <p>{e}</p>
// 		})
// 		this.acceptRequest = this.acceptRequest.bind(this)
// 		this.updateRequest = this.updateRequest.bind(this)
// 	}
//
// 	updateRequest(requestId, request) {
// 		fetch('/api'.concat(requestsUpdateRoute(requestId)), {
// 			headers: { 'Content-type': 'application/json' },
// 			method: 'PUT',
// 			body: JSON.stringify(request),
// 		})
// 			.then(res => {
// 				if (!res.ok) throw Error(res.statusText)
// 				return res.json()
// 			})
// 			.then(request => {
// 				console.log('request~~~~~', request)
// 				if (request) {
// 					this.setState({ request: request, accepted: request.accepted }, () =>
// 						console.log('this.state after update', this.state.request),
// 					)
// 				}
// 			})
// 			.catch(err => {
// 				console.log(err)
// 			})
// 	}
//
// 	acceptRequest(accepted) {
// 		var request = this.props.request
// 		request.accepted = !accepted
// 		this.setState(
// 			{
// 				request: request,
// 				accepted,
// 			},
// 			() => this.updateRequest(this.state.id, this.state.request),
// 		)
// 	}
// 	render() {
// 		return (
// 			<div className="col-md-4 col-sm-6">
// 				<div className="card-container manual-flip">
// 					<div className="card">
// 						<div className="front">
// 							<div className="cover">
// 								<img src="http://www.thelovelyplants.com/wp-content/uploads/2013/09/landscape-design.jpg" />
// 							</div>
// 							<div className="user">
// 								<img
// 									className="img-circle"
// 									src="https://us.123rf.com/450wm/fotomod/fotomod1512/fotomod151200027/49826547-girl-and-lawn-mower-young-woman-in-the-garden.jpg?ver=6"
// 								/>
// 							</div>
// 							<div className="content">
// 								<div className="panel-contact-info">
// 									<div className="col-md-4">
// 										<br />
// 										<p className="calendar">
// 											{this.props.dt[0]}<em>{this.props.dt[1]}</em>
// 										</p>
// 									</div>
// 									<div className="header">
// 										<div className="motto">
// 											<h5>
// 												{this.props.rate} $/hr for {this.props.hours} hours = ${this.props.hours * this.props.rate}
// 											</h5>
// 											<div className="text-center">
// 												<h5>
// 													{this.props.address.address} {this.props.address.city},{' '}
// 													{this.props.address.state}{' '}
// 													{this.props.address.zipcode}
// 												</h5>
// 											</div>
// 											<p>
// 												{this.state.accepted ? 'Accepted' : 'Being Reviewed'}
// 											</p>
// 											{this.props.type === 'WORKER'
// 												? <button
// 														onClick={() =>
// 															this.acceptRequest(this.state.accepted)}
// 													>
// 														{this.state.accepted ? 'Decline Job' : 'Accept Job'}
// 													</button>
// 												: ''}
// 										</div>
// 									</div>
// 									<div className="content">
// 										<div className="main">
// 											<h3 className="text-center">{this.props.jobname}</h3>
// 											<div className="worker">
// 												<p>
// 													Worker: {this.props.request.workerFirst} Homeowner:
// 													{this.props.request.userFirst}
// 												</p>
// 												<p>{this.props.date} at {this.props.time}</p>
// 												<div className="items-container">
// 													<div className="items">
// 														<h4>Services:</h4><p>{this.servicesItems}</p>
// 													</div>
// 													<div className="items">
// 														<h4>Equipment:</h4><p>{this.equipmentItems}</p>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="footer">
// 											<div className="social-links" />
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
//
// export default WorkerRequest

import React from 'react'
import { requestsUpdateRoute, workersShowRoute } from '../../server/routes.js'

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
			hover: true,
			worker: {
				username: '',
				password: '',
				services: {},
				equipment: {},
				area: '',
				firstName: '',
				lastName: '',
				contactInfo: {
					phoneNumber: '',
					email: '',
				},
				rate: 0,
				requests: [],
				image: '',
				address: {
					address: '',
					city: '',
					state: '',
					zipcode: '',
				},
			},
		}
		this.equipmentItems = Object.keys(props.equipment).map(function(key) {
			var e
			if (props.equipment[key] === true) {
				e = key
			}
			return <div>{e}</div>
		})
		this.servicesItems = Object.keys(props.services).map(function(key) {
			var e
			if (props.services[key] === true) {
				e = key
			}
			return <div>{e}</div>
		})
		this.acceptRequest = this.acceptRequest.bind(this)
		this.updateRequest = this.updateRequest.bind(this)
		this.rotateCard = this.rotateCard.bind(this)
		this.getWorker = this.getWorker.bind(this)
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
	rotateCard() {
		this.setState({
			hover: !this.state.hover,
		})
	}
	getWorker(id) {
		fetch('/api'.concat(workersShowRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				this.setState({ worker: data })
			})
			.catch(err => {
				console.log(err)
			})
	}
	componentDidMount() {
		this.getWorker(this.props.workerId)
	}
	render() {
		return (
			<div>
				<div className="col-sm-1" />
				<div className="col-md-4 col-sm-6">
					<div
						className={
							this.state.hover
								? 'card-container manual-flip'
								: 'card-container hover manual-flip'
						}
					>
						<div className="card">
							<div className="front">
								<div className="cover">
									<img src="http://pacific-lawn.com/wp-content/themes/land3/images/sliders/slide3.jpg" />
								</div>
								<div className="user">
									<img className="img-circle" src={this.state.worker.image} />
								</div>
								<div className="content">
									<div className="main">
										<h3 className="name">{this.state.worker.firstName}</h3>
										<p className="profession">
											{this.state.worker.contactInfo.phoneNumber}<br />
											{this.state.worker.area}
										</p>
										<p className="text-center">
											{this.props.request.jobname}<br />{this.props.date}<br />
											{this.props.time} for {this.props.hours} hours <br /> ${this.props.hours * this.props.rate}
										</p>
									</div>
									<div className="footer">
										<button
											className="btn btn-simple"
											onClick={this.rotateCard}
										>
											<i className="fa fa-mail-forward" /> Flip to details
										</button>
										{this.props.type === 'WORKER'
											? <button
													className="btn btn-simple"
													rel="tooltip"
													title="Flip Card"
													onClick={() =>
														this.acceptRequest(this.state.accepted)}
												>
													{this.state.accepted ? 'Decline Job' : 'Accept Job'}
												</button>
											: ''}
									</div>
								</div>
							</div>
							<div className="back">
								<div className="header">
									<h5 className="motto">
										{this.props.jobname} {this.state.accepted ? 'Accepted' : 'Being Reviewed'}
									</h5>
								</div>
								<div className="content">
									<div className="main">
										<h4 className="text-center">Equipment</h4>
										<h6 className="text-center">
											{this.equipmentItems}
										</h6>
										<h4 className="text-center">Services</h4>
										<h6 className="text-center">
											{this.servicesItems}
										</h6>
										<div className="stats-container">
											<div className="stats">
												<h4>50</h4>
												<p>
													Jobs
												</p>
											</div>
											<div className="stats">
												<h4>9.5</h4>
												<p>
													Rating
												</p>
											</div>
											<div className="stats">
												<h4>95%</h4>
												<p>
													Satisfied
												</p>
											</div>
										</div>

									</div>
								</div>
								<div className="footer">
									<button
										className="btn btn-simple"
										rel="tooltip"
										title="Flip Card"
										onClick={() => this.rotateCard()}
									>
										<i className="fa fa-reply" /> Back
									</button>
									<div className="social-links text-center hidden">
										<a
											href="http://deepak646.blogspot.in/"
											className="facebook"
										>
											<i className="fa fa-facebook fa-fw" />
										</a>
										<a href="http://deepak646.blogspot.in/" className="google">
											<i className="fa fa-google-plus fa-fw" />
										</a>
										<a href="http://deepak646.blogspot.in/" className="twitter">
											<i className="fa fa-twitter fa-fw" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default WorkerRequest
