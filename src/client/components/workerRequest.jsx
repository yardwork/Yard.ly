import React from 'react'

const WorkerRequest = ({
	jobname,
	date,
	time,
	rate,
	hours,
	address,
	equipment,
	services,
  id,
}) => {
	const equipmentItems = Object.keys(equipment).map(function(key) {
		var e
		if (equipment[key] === true) {
			e = key
		}
		return (
				<p>{e}</p>
		)
	})
	const servicesItems = Object.keys(services).map(function(key) {
		var e
		if (services[key] === true) {
			e = key
		}
		return (
				<p>{e}</p>
		)
	})
	return (
		<div>
			<div className="panel-heading">
				<h3 className="panel-title">{`${jobname}`}</h3>
			</div>
			<div className="panel-body">
				<div className="panel-contact-info">
					<p>{date} at {time}</p>
					<p>{rate} $/hr for {hours} hours = ${hours * rate}</p>
					<p>
						Address: {address.address} City: {address.city} State:{' '}
						{address.state} Zip: {address.zipcode}
					</p>
					<p>Requested Services: {servicesItems}</p>
					<p>Requested Equipment: {equipmentItems}</p>
				</div>
        { this.props.type === 'WORKER' ?
				<button onClick={ () => this.acceptRequest(this.state.accepted)}>
					{this.state.accepted ? 'Decline Job' : 'Accept Job'}
				</button> : '' }
			</div>
		</div>
	)
}

export default WorkerRequest
