import React from 'react'

const PickaServiceEquipment = ({ equipment, services, onServicesClick, onEquipmentClick }) => {
	const equipmentItems = Object.keys(equipment).map(function(key) {
		var e
		if(equipment[key] === true) {
			e = key
		}
		return (
      <div>
<li><a href="#" onClick={() => onEquipmentClick(key)}>{e}</a></li>
    </div>
		)
	})
	const servicesItems = Object.keys(services).map(function(key) {
		var e
		if(services[key] === true) {
			e = key
		}
		return (
			<div>
<li><a href="#" onClick={() => onEquipmentClick(key)}>{e}</a></li>
		</div>
		)
	})
	return (
    <div>
  		<div className="dropdown">
  		  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Neccesary Equipment
  		  </button>
  		  <ul className="dropdown-menu">
          {equipmentItems}
				</ul>
      </div>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Neccesary Services
				</button>
				<ul className="dropdown-menu">
					{servicesItems}
				</ul>
			</div>
    </div>
	)
}

export default PickaServiceEquipment
