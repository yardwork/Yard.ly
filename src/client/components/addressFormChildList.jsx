import React from 'react'
import AddressChildEntry from './addressFormChildEntry.jsx'

const AddressChildList = props => (
  <div>
    <h1>Address List</h1>
    <div>
      {props.addresses.map(function(address, i) {
        return <div className="AddressChildEntry" key={i}>
          <AddressChildEntry onClickDelete={props.onClickDelete} address={address} number={i} />
        </div>
      })}
    </div>
  </div>
)

export default AddressChildList
