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
			date: 'Placeholder',
			dt: [],
			services: {
				Mowing: false,
				'Tree Trimming': false,
				Edging: false,
				'Weed Eating': false,
				'Hedge Trimming': false,
				Fertilizing: false,
				Aerating: false,
				Mulching: false,
				Weeding: false,
				Planting: false,
				'Grass Seeding': false,
			},
			equipment: {
				'Lawn Mower': false,
				'Weed Eater': false,
				'Mulch Truck': false,
				Edger: false,
				'Hedge Trimmer': false,
				Chainsaw: false,
				'Lawn Aerator': false,
				Seeder: false,
			},
			request: {
				_id: '',
				jobname: 'Placeholder',
				userId: '',
				workerId: '',
				accepted: false,
				services: {
					Mowing: false,
					'Tree Trimming': false,
					Edging: false,
					'Weed Eating': false,
					'Hedge Trimming': false,
					Fertilizing: false,
					Aerating: false,
					Mulching: false,
					Weeding: false,
					planting: false,
					'Grass Seeding': false,
				},
				equipment: {
					'Lawn Mower': false,
					'Weed Eater': false,
					'Mulch Truck': false,
					Edger: false,
					'Hedge Trimmer': false,
					Chainsaw: false,
					'Lawn Aerator': false,
					Seeder: false,
				},
				address: {
					address: '',
					city: '',
					state: '',
					zipcode: '',
				},
				time: '',
				hours: 2,
				rate: 21,
				image: 'http://dummyimage.com/195x227.png/dddddd/000000',
				__v: 0,
			},
			jobname: 'Placeholder',
			time: 'Placeholder',
			hours: 0,
			address: this.props.user.addresses[0] || {
				address: '',
				city: '',
				state: '',
				zipcode: '',
			},
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
		console.log(type, '!!!!!!type', this.state.equipment)
		var equipment = {
			...this.state.equipment,
			[type]: !this.state.equipment[type],
		}
		this.setState({
			equipment: equipment,
		}, ()=>{console.log('this.state for equip', this.state.equipment)})
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

		var newDate = day + ' ' + month + ' ' + dt
		var dateMonth = [dt, month]
		console.log('Date~~~~~~~', dateMonth)
		this.setState({
			date: newDate,
			dt: dateMonth,
		})
	}
	setTime(time) {
		this.setState({
			time: time,
		})
	}
	setHours(e) {
		e.preventDefault()
		this.setState({
			hours: e.target.value,
		}, ()=> {console.log('this,.state.hosuir', this.state.hours)})
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
				workerFirst: this.props.worker.firstName,
				userFirst: this.props.user.firstName,
				accepted: false,
				services: this.state.services,
				equipment: this.state.equipment,
				address: this.state.address,
				hours: this.state.hours,
				time: this.state.time,
				image:
					'http://1.bp.blogspot.com/-gzCQGs87A3Y/VYNMq0zff1I/AAAAAAAAmoE/LAVO2uK5Efg/s1600/pinned%2Blawn%2Bmower.JPG',
				date: this.state.date,
				dt: this.state.dt,
				rate: this.props.worker.rate,
			}),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(request => {
				console.log('request~~~~~', request)
				if (request) {
					this.setState(
						{
							request: request,
							services: {
								Mowing: false,
								'Tree Trimming': false,
								Edging: false,
								'Weed Eating': false,
								'Hedge Trimming': false,
								Fertilizing: false,
								Aerating: false,
								Mulching: false,
								Weeding: false,
								planting: false,
								'Grass Seeding': false,
							},
							equipment: {
								'Lawn Mower': false,
								'Weed Eater': false,
								'Mulch Truck': false,
								Edger: false,
								'Hedge Trimmer': false,
								Chainsaw: false,
								'Lawn Aerator': false,
								Seeder: false,
							},
							address: {
								address: '',
								city: '',
								state: '',
								zipcode: '',
							},
							time: '',
							hours: 2,
							rate: 21,
							image: 'http://dummyimage.com/195x227.png/dddddd/000000',
							__v: 0,
							jobname: 'Placeholder',
							time: 'Placeholder',
							hours: 0,
							address: {
								address: '',
								city: '',
								state: '',
								zipcode: '',
							},
						},
						() => this.props.makeRequestClick(this.state.request),
					)
				}
			})
			.then(() => {
				document.getElementById('requestjobname').value = ''
				document.getElementById('requesthours').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	changeJobName(e) {
		e.preventDefault()
		// console.log(e.target)
		this.setState({
			jobname: e.target.value,
		})
	}

	render() {
		return (
			<div className="panel-body">
				<RequestPreview
					addresses={this.props.user.addresses}
					setAddress={this.setAddress}
					changeJobName={this.changeJobName}
					equipment={this.props.worker.equipment}
					services={this.props.worker.services}
					onServicesClick={this.onServicesClick}
					onEquipmentClick={this.onEquipmentClick}
					setDate={this.setDate}
					setTime={this.setTime}
					setHours={this.setHours}
					worker={this.props.worker}
					user={this.props.user}
					workerFirst={this.props.worker.firstName}
					userFirst={this.props.user.firstName}
					address={this.state.address}
					date={this.state.date}
					dt={this.state.dt}
					services={this.state.services}
					equipment={this.state.equipment}
					request={this.state.request}
					jobname={this.state.jobname}
					rate={this.props.worker.rate}
					hours={this.state.hours}
					time={this.state.time}
					submitRequest={this.submitRequest}
				/>
			</div>
		)
	}
}

export default RequestMaker
