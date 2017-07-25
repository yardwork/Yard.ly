import React from 'react'
import AddressChildEntry from './AddressFormChildEntry.jsx'

const AddressChildList = props => (
  <div>
    <h1>Address List</h1>
    <div>
      {props.addresses.map(function(address, i) {
        return <div className="AddressChildEntry" key={i}>
          <AddressChildEntry onClickAddress={props.onClickAddress} onClickDelete={props.onClickDelete} address={address} number={i} />
        </div>
      })}
    </div>
  </div>
)

export default AddressChildList
