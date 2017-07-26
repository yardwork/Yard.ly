import React from 'react'

const RequestPreview = props => {
	const equipmentItems = Object.keys(props.equipment).map(function(key) {
		var e
		if (props.equipment[key] === true) {
			e = key
			return <li>{e}</li>
		}
	})
	const servicesItems = Object.keys(props.services).map(function(key) {
		var e
		if (props.services[key] === true) {
			e = key
			return <li>{e}</li>
		}
	})

	return (
			<div className="card cover">
				<div className="content text-center">
					<div className="panel-contact-info">
						<div className="col-md-1">
							<br />
							<p className="calendar">
								{props.dt[0]}<em>{props.dt[1]}</em>
							</p>
						</div>
						<div className="content">
							<h3>{props.jobname}</h3>
							<p>
								Worker: {props.request.workerFirst} Homeowner:{' '}
								{props.request.userFirst}
							</p>
							<p>{props.date} at {props.time}</p>
							<p>
								{props.rate} $/hr for {props.hours} hours = ${props.hours * props.rate}
							</p>
						</div>
					</div>
				</div>
				<div className="text-center">
				<div><h3>Requested Services: </h3>{servicesItems}</div>
				<div><h3>Requested Equipment: </h3>{equipmentItems}</div>
				<p>
					Address: {props.address.address} City:{' '}
					{props.address.city} State:{props.address.state}
					Zip: {props.address.zipcode}
				</p>
				<p>{props.accepted ? 'Accepted' : 'Being Reviewed'}</p>
			</div>
			</div>

	)
}

export default RequestPreview
