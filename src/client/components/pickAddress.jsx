import React from 'react'

const PickAddress = (props) => {
	const addressItems = props.addresses.map(function(ele) {
		return (
			<div>
				<li><a onClick={() => props.setAddress(ele)}>Address: {ele.address} City: {ele.city} State: {ele.state} Zip: {ele.zipcode}</a></li>
			</div>
		)
	})
	return (
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					data-toggle="dropdown"
				>
					Pick an address
				</button>
				<ul className="dropdown-menu">
					{addressItems}
				</ul>
			</div>
	)
}

export default PickAddress
