import React from 'react'

const PickAddress = ({
	addresses, setAddress
}) => {
	const addressItems = (addresses).map(function(ele) {
		return (
			<div>
				<li><a onClick={() => setAddress(ele)}>Address: {ele.address}</a></li>
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
