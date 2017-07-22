import React, { Component } from 'react'
import PickaDate from './pickaDate.jsx'
import PickaServiceEquipment from './pickaServiceEquipment.jsx'
import RequestPreview from './requestPreview.jsx'
import PickAddress from './pickAddress.jsx'
import { REQUESTS_CREATE } from './../../server/routes.js'
class RequestMaker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: '2013-08-03T02:00:00Z',
			services: {
				Mowing: false,
				TreeTrimming: false,
				Edging: false,
				Weedeating: false,
				HedgeTrimming: false,
				Fertilizing: false,
				Aerating: false,
				Mulching: false,
				Weeding: false,
				Planting: false,
				GrassSeeding: false,
			},
			equipment: {
				LawnMower: false,
				Weedeater: false,
				MulchTruck: false,
				Edger: false,
				HedgeTrimmer: false,
				Chainsaw: false,
				LawnAerator: false,
				Seeder: false,
			},
			request: {},
			jobname: 'Yardwork',
			time: '8:00 am',
			hours: 2,
			rate: this.props.worker.rate,
			user: this.props.user,
			addresses: this.props.addresses,
			address: this.props.addresses[0] || { address: '', city: '', state: '', zipcode: '', },
		}
		this.onServicesClick = this.onServicesClick.bind(this)
		this.onEquipmentClick = this.onEquipmentClick.bind(this)
		this.setDate = this.setDate.bind(this)
		this.submitRequest = this.submitRequest.bind(this)
		this.changeJobName = this.changeJobName.bind(this)
		this.setTime = this.setTime.bind(this)
		this.setHours = this.setHours.bind(this)
		this.setAddress = this.setAddress.bind(this)
	}
	onServicesClick(type) {
		var services = this.state.services
		services[type] = !services[type]
		this.setState({
			services: services,
		})
	}
	onEquipmentClick(type) {
		var equipment = this.state.equipment
		equipment[type] = !equipment[type]
		this.setState({
			equipment: equipment,
		})
	}
	setDate(d) {
		var days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]
		var months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]

		var date = new Date(d)
		var year = date.getFullYear()
		var month = months[date.getMonth() + 1]
		var dt = date.getDate()
		var day = days[date.getDay()]

		if (dt < 10) {
			dt = '0' + dt
		}
		if (month < 10) {
			month = '0' + month
		}

		var newDate =  day + ' ' + month + ' ' + dt + ', ' + year
		console.log('Date~~~~~~~', newDate)
		this.setState({
			date: newDate,
		})
	}
	setTime(time) {
		this.setState({
			time: time,
		})
	}
	setHours(hours) {
		this.setState({
			hours: hours,
		})
	}
	setAddress(address) {
		this.setState({
			address: address,
		})
	}
	submitRequest() {
		fetch('/api'.concat(REQUESTS_CREATE), {
			headers: { 'Content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({
				jobname: this.state.jobname,
				userId: this.props.user._id,
				workerId: this.props.worker._id,
				accepted: false,
				services: this.state.services,
				equipment: this.state.equipment,
				address: this.state.address,
				hours: this.state.hours,
				time: this.state.time,
				image:
					'http://1.bp.blogspot.com/-gzCQGs87A3Y/VYNMq0zff1I/AAAAAAAAmoE/LAVO2uK5Efg/s1600/pinned%2Blawn%2Bmower.JPG',
				date: this.state.date,
				rate: this.state.rate,
			}),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(request => {
				console.log('request~~~~~', request)
				if (request) {
					this.setState({ request: request }, () =>
						console.log('this.state after update', this.state.request),
					)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
	changeJobName(e) {
		e.preventDefault()
		this.setState({
			jobname: e.target.value,
		})
	}
	render() {
		return (
			<div>
				<h1>Make a request</h1>
				<form onChange={this.changeJobName}>
					<input type="text" placeholder="Jobname" />
				</form>
				<PickAddress addresses={this.state.addresses} setAddress={this.setAddress} />
				<PickaServiceEquipment
					equipment={this.props.worker.equipment}
					services={this.props.worker.services}
					onServicesClick={this.onServicesClick}
					onEquipmentClick={this.onEquipmentClick}
				/>
				<PickaDate
					setDate={this.setDate}
					setTime={this.setTime}
					setHours={this.setHours}
				/>
				<div>
					<RequestPreview
						user={this.props.user}
						addresses={this.props.addresses}
						date={this.state.date}
						services={this.state.services}
						equipment={this.state.equipment}
						request={this.state.request}
						jobname={this.state.jobname}
						rate={this.state.rate}
						hours={this.state.hours}
						time={this.state.time}
					/>
					<button onClick={() => this.submitRequest()}>
						Submit
					</button>
				</div>
			</div>
		)
	}
}

export default RequestMaker
