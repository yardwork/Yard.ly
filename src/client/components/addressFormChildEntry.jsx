import React from 'react'

const AddressChildEntry = props => {
	return (
		<div>
			<h3>Address: {props.number}</h3>
			<h4>
				{props.address.address} {props.address.city} {props.address.state}{' '}
				{props.address.zipcode}
			</h4>
			<div className="addressDelete">
				<button onClick={() => props.onClickDelete(props.number)}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default AddressChildEntry
