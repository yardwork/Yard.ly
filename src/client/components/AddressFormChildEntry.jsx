import React from 'react'

const AddressChildEntry = props => {
	return (
		<div>
			<div className="addressKey">
				<div className="panel panel-default">
					<div className="panel-heading">
						<div className="panel-title">
							<h2>Address Entry: {props.number}</h2>
						</div>
					</div>
			<div className="address">
				<h3 className="panel-title">{props.address.address} {props.address.city} {props.address.state} {props.address.zipcode}</h3>
			</div>
			<div className="addressDelete">
				<button onClick={() => props.onClickDelete(props.number)}>
					Delete
				</button>
				</div>
			</div>
		</div>
		</div>
	)
}

export default AddressChildEntry
