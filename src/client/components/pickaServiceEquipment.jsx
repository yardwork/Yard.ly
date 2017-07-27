import React from 'react'

const PickaServiceEquipment = ({
	equipment,
	services,
	onServicesClick,
	onEquipmentClick,
}) => {
	const equipmentItems = Object.keys(equipment).map(function(key) {
		var e
		if (equipment[key] === true) {
			e = key
		}
		return (
			<div>
				<li><a onClick={() => onEquipmentClick(e)}>{e}</a></li>
			</div>
		)
	})
	const servicesItems = Object.keys(services).map(function(key) {
		var e
		if (services[key] === true) {
			e = key
		}
		return (
			<div>
				<li><a onClick={() => onServicesClick(e)}>{e}</a></li>
			</div>
		)
	})
	return (
		<div>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle equipmentselect"
					type="button"
					data-toggle="dropdown"
				>
					Equipment
				</button>
				<ul className="dropdown-menu">
					{equipmentItems}
				</ul>
			</div>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle equipmentselect"
					type="button"
					data-toggle="dropdown"
				>
					Services
				</button>
				<ul className="dropdown-menu">
					{servicesItems}
				</ul>
			</div>
		</div>
	)
}

export default PickaServiceEquipment
