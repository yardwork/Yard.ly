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
		<div>
			<div className="panel-heading">
				<h3 className="panel-title">{`${props.jobname}`}</h3>
			</div>
			<div className="panel-body">
				<div className="panel-contact-info">
					<p>Worker: {props.user.firstName}  Homeowner: {props.worker.firstName}</p>
					<p>{props.date} at {props.time}</p>
					<p>
						{props.rate} $/hr for {props.hours} hours = ${props.hours * props.rate}
					</p>
					<div><h1>Requested Equipment: </h1><ul>{equipmentItems}</ul>
        </div>
          <h1>Requested Services: </h1><ul>
            {servicesItems}
          </ul>
					<p>
						Address: {props.address.address}
            City: {props.address.city} State:{props.address.state}
						Zip: {props.address.zipcode}
					</p>
					<p>{props.accepted ? 'Accepted' : 'Being Reviewed'}</p>
				</div>
			</div>
		</div>
	)
}

export default RequestPreview
