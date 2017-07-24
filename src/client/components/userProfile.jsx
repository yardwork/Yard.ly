import React, { Component } from 'react'
import {
	addressAddRoute,
	addressDeleteRoute,
	usersShowRoute,
} from '../../server/routes.js'
import AddressFormParent from './addressFormParent.jsx'


// import { usersUpdateRoute } from '../../shared/routes'
class UserProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
    }

  }
  render() {
		return (
      <div>
        <AddressFormParent user={this.props.user} />
      </div>
    )
  }
}

export default UserProfile
