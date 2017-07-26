import React, { Component } from 'react'
import {
	addressAddRoute,
	addressDeleteRoute,
	usersShowRoute,
	usersUpdateRoute,
	requestsUserRoute,
	workersUpdateRoute,
	workersShowRoute,
	requestsWorkerRoute,
	requestsFilterRoute,
} from '../../server/routes.js'
import AddressFormChild from './addressFormChild.jsx'
import AddressChildList from './addressFormChildList.jsx'
import WorkerRequestList from './workerRequestList.jsx'
import EditContactInfo from './editContactInfo.jsx'
import WorkerInfo from './workerInfo.jsx'
import EquipmentServicesInfo from './equipmentServicesInfo.jsx'
import axios from 'axios'

// import { usersUpdateRoute } from '../../shared/routes'
class AddressFormParent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requests: [],
			worker: {
				username: '',
				password: '',
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
					HedgeTrimmer: true,
					Chainsaw: false,
					LawnAerator: false,
					Seeder: false,
				},
				area: '',
				firstName: '',
				lastName: '',
				contactInfo: {
					phoneNumber: '',
					email: '',
				},
				rate: 0,
				requests: [],
				radius: 5,
				image: '',
				address: {
					address: '',
					city: '',
					state: '',
					zipcode: '',
				},
			},
			user: {
				__v: 0,
				username: '',
				password:
					'',
				_id: '',
				contactInfo: {
					phoneNumber: '',
					email: '',
				},
				addresses: [
					{
						zipcode: '',
						state: '',
						city: '',
						address: '',
						requests: [],
					},
				],
			},
			address: {
				address: '',
				city: '',
				state: '',
				zipcode: '',
			},
			currId: '',
			type: '',
		}
		this.submitForm = this.submitForm.bind(this)
		this.submitEmail = this.submitEmail.bind(this)
		this.submitPhone = this.submitPhone.bind(this)
		this.deleteAddress = this.deleteAddress.bind(this)
		this.onClickDelete = this.onClickDelete.bind(this)
		this.onClickAddress = this.onClickAddress.bind(this)
		this.getUserRequests = this.getUserRequests.bind(this)
		this.getWorkerRequests = this.getWorkerRequests.bind(this)
		this.getWorker = this.getWorker.bind(this)
		this.getUser  = this.getUser.bind(this)
		this.updateUser = this.updateUser.bind(this)
		this.updateRequest = this.updateRequest.bind(this)
		this.submitEmail = this.submitEmail.bind(this)
		this.submitPhone = this.submitPhone.bind(this)
		this.submitArea = this.submitArea.bind(this)
		this.submitRate = this.submitRate.bind(this)
		this.submitRadius = this.submitRadius.bind(this)
		this.submitAddress = this.submitAddress.bind(this)
		this.submitUserPhone = this.submitUserPhone.bind(this)
		this.submitUserEmail = this.submitUserEmail.bind(this)
		this.updateWorker = this.updateWorker.bind(this)
		this.onEquipmentClick = this.onEquipmentClick.bind(this)
		this.onServicesClick = this.onServicesClick.bind(this)
		this.changeService = this.changeService.bind(this)
		this.changeEquipment = this.changeEquipment.bind(this)

	}
	submitUserEmail(e) {
		e.preventDefault()
		var user = {
			...this.state.user,
			contactInfo: {
				...this.state.user.contactInfo,
				email: e.target.email.value
			}
		}
		this.setState(
			{
				user: user,
			},
			() => this.updateUser(this.state.user._id, this.state.user),
		)
	}

	submitUserPhone(e) {
		e.preventDefault()
		var user = {
			...this.state.user,
			contactInfo: {
				...this.state.user.contactInfo,
				phoneNumber: e.target.phoneNumber.value
			}
		}
		this.setState(
			{
				user: user,
			},
			() => this.updateUser(this.state.user._id, this.state.user),
		)
	}
	updateUser(id, user) {
		fetch('/api'.concat(usersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(user),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				if (data) {
					this.setState({ user: data })
				}
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	updateWorker(id, worker) {
		fetch('/api'.concat(workersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(worker),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				if (data) {
					this.setState({ worker: data })
				}
			})
			.then(() => {
				this.getWorker(id)
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
				document.getElementById('image').value = ''
				document.getElementById('rate').value = ''
				document.getElementById('radius').value = ''

			})
			.catch(err => {
				console.log(err)
			})
	}
	submitEmail(e) {
		e.preventDefault()
		var worker = {
			...this.state.worker,
			contactInfo: {
				...this.state.worker.contactInfo,
				email: e.target.email.value
			}
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitPhone(e) {
		e.preventDefault()
		var worker = {
			...this.state.worker,
			contactInfo: {
				...this.state.worker.contactInfo,
				phoneNumber: e.target.phoneNumber.value
			}
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitArea(e) {
		var worker = {
			...this.state.worker,
			area: e.target.area.value
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitAddress(e) {
		e.preventDefault()
		var worker = {
			...this.state.worker,
			address: {
				...this.state.worker.address,
				address: e.target.address.value,
				city: e.target.city.value,
				state: e.target.state.value,
				zipcode: e.target.zipcode.value,
			}
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitImage(e) {
		var worker = {
			...this.state.worker,
			image: e.target.image.value
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitRate(e) {
		var worker = {
			...this.state.worker,
			rate: e.target.rate.value
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	submitRadius(e) {
		var worker = {
			...this.state.worker,
			radius: e.target.radius.value
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
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
				this.setState({ worker: data, currId: id })
			})
			.catch(err => {
				console.log(err)
			})
	}

	getWorkerRequests(wid) {
		fetch('/api'.concat(requestsWorkerRoute(wid)), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(requests => {
				this.setState({ requests: requests, type: 'WORKER' })
			})
			.catch(err => {
				console.log(err)
			})
	}
	getUserRequests(uid) {
		fetch('/api'.concat(requestsUserRoute(uid)), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(requests => {
				this.setState({ requests: requests, type: 'USER' })
			})
			.catch((err) => {
				console.log(err)
			})
	}
	postAddress(address, id) {
		fetch('/api'.concat(addressAddRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(address),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				if (data) {
					this.setState({ user: data, addresses: data.addresses })
				}
			})
			.then(() => {
				document.getElementById('address').value = ''
				document.getElementById('city').value = ''
				document.getElementById('state').value = ''
				document.getElementById('zipcode').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	getUser(id) {
		fetch('/api'.concat(usersShowRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				this.setState({ user: data, type: 'USER', currId: id })
			})
	}
	submitForm(e) {
		e.preventDefault()
		this.setState(
			{
				address: {
					address: e.target.address.value,
					city: e.target.city.value,
					state: e.target.state.value,
					zipcode: e.target.zipcode.value,
					requests: [],
				},
			},
			() => this.postAddress(this.state.address, this.state.user._id),
		)
	}
	deleteAddress(addressId, id) {
		fetch('/api'.concat(addressDeleteRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(addressId),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				if (data) {
					this.setState({ user: data })
				}
			})
			.then(() => {
				document.getElementById('address').value = ''
				document.getElementById('city').value = ''
				document.getElementById('state').value = ''
				document.getElementById('zipcode').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	onClickAddress(e) {
		this.setState({ address: e })
	}
	onClickDelete(e) {
		var arrIndex = { index: e }
		this.deleteAddress(arrIndex, this.state.user._id)
	}
	updateUser(id, user) {
		fetch('/api'.concat(usersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(user),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				if (data) {
					this.setState({ user: data })
				}
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
				document.getElementById('image').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	submitEmail(e) {
		e.preventDefault()
		var user = this.state.user
		user.contactInfo.email = e.target.email.value
		this.setState(
			{
				user: user,
			},
			() => this.updateUser(this.state.user._id, this.state.user),
		)
	}
// <EditContactInfo contactInfo={this.state.user} submitEmail={this.submitEmail} submitPhone={this.submitPhone} />
	submitPhone(e) {
		e.preventDefault()
		var user = this.state.user
		user.contactInfo.phoneNumber = e.target.phoneNumber.value
		this.setState(
			{
				user: user,
			},
			() => this.updateUser(this.state.user._id, this.state.user),
		)
	}
	updateRequest() {
		axios({
			method: 'get',
			url: '/api/session',
		})
			.then(res => {
				this.setState(
					{ currId: res.data.user._id, type: res.data.type },
					() => {
						if (this.state.type === 'USER') {
							this.getUser(this.state.currId)
							this.getUserRequests(this.state.currId)
						} else if (this.state.type === 'WORKER') {
							this.getWorkerRequests(this.state.currId)
						}
					},
				)
			})
			.catch(console.log)
	}

	onEquipmentClick(e) {
		this.changeEquipment(e)
	}
	changeEquipment(type) {
		var worker = {
			...this.state.worker,
			equipment: {
				...this.state.worker.equipment,
				[type]: !this.state.worker.equipment[type]
			}
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	onServicesClick(e) {
		this.changeService(e)
	}
	makeRequestClick() {
		this.getUserWorkerRequests(
			this.state.currId,
			this.props.location.pathname.slice(9),
		)
	}
	changeService(type) {
		var worker = {
			...this.state.worker,
			services: {
				...this.state.worker.services,
				[type]: !this.state.worker.services[type]
			}
		}
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: '/api/session',
		})
		.then(res=>{
			if(res.data.type === 'USER') {
				this.getUser(res.data.user._id)
				this.getUserRequests(res.data.user._id)
			} else if (res.data.type === 'WORKER') {
				this.getWorker(res.data.user._id)
				this.getWorkerRequests(res.data.user._id)
			}
		})

	}
	render() {
		return (
			<div>
					{ this.state.type === 'USER' ?
					<div>
					<h1>Welcome {this.state.user.firstName}</h1>
					<h2>{this.state.user.contactInfo.phoneNumber}{this.state.user.contactInfo.email}</h2>
					<form onSubmit={this.submitUserPhone}>
						<input
							id="phoneNumber"
							type="text"
							name="phoneNumber"
							placeholder={"Edit phone number: " + this.state.user.contactInfo.phoneNumber}
						/>
						<button type="submit">Submit</button>
					</form>
					<form onSubmit={this.submitUserEmail}>
						<input
							id="email"
							type="text"
							name="email"
							placeholder={"Edit email: " + this.state.user.contactInfo.email}
						/>
						<button type="submit">Submit</button>
					</form>
					<AddressFormChild click={this.submitForm.bind(this)} />
					<AddressChildList
						onClickAddress={this.onClickAddress}
						onClickDelete={this.onClickDelete}
						addresses={this.state.user.addresses}
					/>
				</div> : '' }
				{ this.state.type === 'WORKER' ?
				<div>
				<h1>Welcome {this.state.user.firstName}</h1>
				<WorkerInfo worker={this.state.worker} />
				<EquipmentServicesInfo
					worker={this.state.worker}
					onEquipmentClick={this.onEquipmentClick}
					onServicesClick={this.onServicesClick}
					currId={this.state.currId}
				/>
				<EditContactInfo submitArea={this.submitArea} submitAddress={this.submitAddress} submitEmail={this.submitEmail} submitImage={this.submitImage} submitRate={this.submitRate} submitRadius={this.submitRadius} submitPhone={this.submitPhone} worker={this.state.worker} contactInfo={this.state.worker.contactInfo} area={this.state.worker.area} />
			</div> : '' }
				<div>
					<WorkerRequestList  requests={this.state.requests} type={this.state.type} />
				</div>
			</div>
		)
	}
}

export default AddressFormParent
