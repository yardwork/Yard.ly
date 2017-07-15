import React from 'react'

const AddressChildEntry = props => {
	return (
		<div>
			<div className="addressKey">
				<h1>Address Entry: {props.number}</h1>
			</div>
			<div className="addressAddress">
				<h2>{props.address.address}</h2>
			</div>
			<div className="addressCity">
				<h2>{props.address.city}</h2>
			</div>
			<div className="addressState">
				<h2>{props.address.state}</h2>
			</div>
			<div className="addressZipcode">
				<h2>{props.address.zipcode}</h2>
			</div>
			<div className="Delete">
				<button onClick={()=> props.onClickDelete(props.number)}>Delete</button>
			</div>
		</div>
	)
}

export default AddressChildEntry
