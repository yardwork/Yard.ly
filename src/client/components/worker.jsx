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
}) => {
	const equipmentItems = Object.keys(equipment).map(function(key) {
		var e
		if (equipment[key] === true) {
			e = key
			return <small>  {e}  </small>
		}
	})
	const servicesItems = Object.keys(services).map(function(key) {
		var e
		if (services[key] === true) {
			e = key
			return <small>  {e}  </small>
		}
	})

	return (
		<div
			className="panel panel-default"
			onClick={onClick}
			style={{
				color: clicked ? 'red' : 'inherit',
			}}
		>

      <div className="panel-heading">
        { userType !=='USER' && userType !=='WORKER' ? <h3 className="panel-title" onClick={()=>onWorkerClick}>{`${firstName} ${lastName}`}</h3> : <Link to={`/profile/${_id}`}><h3 className="panel-title">{`${firstName} ${lastName}`}</h3></Link>}
			</div>
			<div className="panel-body">
				<div className="panel-contact-info">

						<span
							className="glyphicon glyphicon-wrench"
							aria-hidden="true"
						/>
            <div>
						{equipmentItems}
					</div>
          <br />
						<span
							className="glyphicon glyphicon-leaf"
							aria-hidden="true"
						/>
            <div>
						{servicesItems}
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
