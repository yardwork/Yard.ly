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
import axios from 'axios'

// import { usersUpdateRoute } from '../../shared/routes'
class AddressFormParent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requests: [],
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
		this.updateRequest = this.updateRequest.bind(this)

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
				console.log('~~~~~~~worker', requests)
				this.setState({ requests: requests, type: 'WORKER' })
			})
			.then(() => {
				console.log('~~~~~~state', this.state)
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
				console.log('~~~~~~~worker', requests)
				this.setState({ requests: requests, type: 'USER' })
			})
			.then(() => {
				console.log('~~~~~~state', this.state)
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
				console.log('data', data)
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
				this.setState({ user: data, type: 'USER' })
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
				console.log('data', data)
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
				console.log('data', data)
				if (data) {
					this.setState({ user: data }, () =>
						console.log('this.state after update', this.state.user),
					)
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
				console.log('Heres the response', res)
				this.setState(
					{ currId: res.data.user._id, type: res.data.type },
					() => {
						if (this.state.type === 'USER') {
							this.getUser(this.state.currId)
							this.getUserRequests(this.state.currId)
							console.log(
								this.state,
								'this is ~~~~~~~~~~~~ state',
							)
						} else if (this.state.type === 'WORKER') {
							this.getWorkerRequests(this.state.currId)
						}
						console.log(this.state, 'this.state!!!!!!!!!!!!')
					},
				)
			})
			.catch(console.log)
	}
	componentDidMount() {
		// console.log(this.state)
		// this.getUser(this.props.user._id)
		axios({
			method: 'get',
			url: '/api/session',
		})
		.then(res=>{
			if(res.data.type === 'USER') {
				this.getUser(res.data.user._id)
				this.getUserRequests(res.data.user._id)
			} else if (res.data.type === 'WORKER' && res.data.user._id === this.props.location.pathname.slice(9)) {
				this.getWorkerRequests(this.props.location.pathname.slice(9))
			}
		})

	}
	render() {
		return (
			<div>
				<div>
					{ this.state.type === 'USER' ?
					<div>
					<h1>Welcome {this.state.user.firstName}</h1>

					<h1 onClick={this.submitForm.bind(this)}>Add your address</h1>
					<AddressFormChild click={this.submitForm.bind(this)} />
					<AddressChildList
						onClickAddress={this.onClickAddress}
						onClickDelete={this.onClickDelete}
						addresses={this.state.user.addresses}
					/>
				</div> : '' }
				</div>
				<div>
					<WorkerRequestList  requests={this.state.requests} type={this.state.type} />
				</div>
			</div>
		)
	}
}

export default AddressFormParent
