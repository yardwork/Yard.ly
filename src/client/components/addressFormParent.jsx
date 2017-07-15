import React, { Component } from 'react'
import AddressFormChild from './addressFormChild.jsx'
import AddressChildList from './addressFormChildList.jsx'

// import { usersUpdateRoute } from '../../shared/routes'
 class AddressFormParent extends Component {
  Constructor() {
    // super(props)
    this.state = {
      user: {},
      address: {
        address: '',
        city: '',
        state: '',
        zipcode: '',
      },
      addresses: [{ address: 'rrr', city: 'rrr', state: 'rr', zipcode: '222222' }, { address: 'asdf', city: 'aedew', state: 'we', zipcode: '123432' }]
    }
    // this.submitForm = this.submitForm.bind(this)
  }
  // componentDidMount() {
  //   // fetch to the api for the current user data
  // }
  postAddress(address, id) {
    fetch('/api'.concat(usersUpdateRoute(id)), { headers: { 'Content-type': 'application/json' }, method: 'PUT', body: JSON.stringify(address) })
      .then((res) => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        console.log('data', data)
        this.setState({ user: data.user, addresses: data.user.addresses })
      })
      .catch(() => {
      })
  }
  submitForm(e) {
    e.preventDefault()
    // this.state
    // console.log(this.state)
    this.setState({
      address: {
        address: e.target.address.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zipcode: e.target.zipcode.value,
      },
    },() => console.log(this.state))
  }
  render() {
    return (
      <div>
        <h1 onClick={this.submitForm.bind(this)}>Hello World</h1>
        <div>
          <AddressFormChild click={this.submitForm.bind(this)} />
          <AddressChildList addresses={[{ address: 'rrr', city: 'rrr', state: 'rr', zipcode: '222222' }, { address: 'asdf', city: 'aedew', state: 'we', zipcode: '123432' }]} />
        </div>
      </div>
    )
  }
}


export default AddressFormParent
