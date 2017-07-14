import React from 'react'
import AddressListChild from './address-list-child'

const AddressListParent = props => (
  <div>
    <h1>Hello World from AddressList Parent</h1>
    <div>
      {/* {this.props.data.map(item => <div>{item}</div>)} */}
    </div>
    <AddressListChild />
  </div>
)

export default AddressListParent
