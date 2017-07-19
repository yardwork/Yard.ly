import React, { Component } from 'react'
import {
	addressAddRoute,
	addressDeleteRoute,
	usersShowRoute,
} from '../../server/routes.js'
import AddressFormChild from './addressFormChild.jsx'
import AddressChildList from './addressFormChildList.jsx'

// import { usersUpdateRoute } from '../../shared/routes'
class AddressFormParent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				__v: 0,
				username: '',
				password:
					'',
				_id: '59656e856f3e1576ced3e4e5',
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
		}
		this.submitForm = this.submitForm.bind(this)
		this.deleteAddress = this.deleteAddress.bind(this)
		this.onClickDelete = this.onClickDelete.bind(this)
		this.onClickAddress = this.onClickAddress.bind(this)
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
				console.log('data', data)
				this.setState({ user: data })
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
	componentDidMount() {
		// console.log(this.state)
		this.getUser(this.props.user._id)
		// console.log(this.state)
	}
	render() {
		return (
			<div>
				<h1 onClick={this.submitForm.bind(this)}>Add your address</h1>
				<div>
					<AddressFormChild click={this.submitForm.bind(this)} />
					<AddressChildList
						onClickAddress={this.onClickAddress}
						onClickDelete={this.onClickDelete}
						addresses={this.state.user.addresses}
					/>
				</div>
			</div>
		)
	}
}

export default AddressFormParent
