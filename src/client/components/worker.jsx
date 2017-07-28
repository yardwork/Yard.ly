import React from 'react'
import { Link } from 'react-router-dom'

const Worker = ({
  userType,
  onClick,
	onWorkerClick,
	clicked,
	username,
	firstName,
	lastName,
	services,
	equipment,
	contactInfo,
	_id,
	image,
	area
}) => {
	const equipmentItems = Object.keys(equipment).map(function(key) {
		if (equipment[key] === true) {
			return <p className="col-xs-6 serv-eqp-entry">{key}</p>
		}
	})
	const servicesItems = Object.keys(services).map(function(key) {
		if (services[key] === true) {
			return <p className="col-xs-6 serv-eqp-entry">{key}</p>
		}
	})

	return (
		<div
			className="panel panel-default worker-container"
			onClick={onClick}
			style={{
				color: clicked ? 'red' : 'inherit',
			}}
		>
			<div className="worker-header">
			<img className="circular--square worker-list-photo" src={image} width="150px" height="150px" />
			{ userType !=='USER' && userType !=='WORKER' ? <h3 onClick={()=>onWorkerClick}><strong>{`${firstName} ${lastName}`}</strong></h3> : <Link to={`/profile/${_id}`}><h3><strong>{`${firstName} ${lastName}`}</strong></h3></Link>}
			<div>{area}</div>
			</div>
			<div className="panel-body container-fluid worker-services-equipment panel-footer">
				<div className="worker-services col-xs-6" style={{borderRight: "1px solid #ddd"}}>
				<strong>Services</strong>
				<div className="container-fluid serv-eqp-container">
					{servicesItems}
				</div><strong>{`${firstName} ${lastName}`}</strong>
				</div>
				<div className="worker-equipment col-xs-6">
				<strong>Equipment</strong>
				<div className="container-fluid serv-eqp-container">
					{equipmentItems}
				</div>
				</div>
			</div>
			<div>
				{/* photo */}
			</div>
		</div>
	)
}

export default Worker
