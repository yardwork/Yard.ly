import React from 'react'

const EditEquipmentInfo = ({ onEquipmentClick }) =>
		<div className="dropdown" style={{float: 'right'}}>
		<div className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}}>
			<span className="panel-title"><small>EDIT </small></span>
		  <span className="caret"></span>
		</div>
		  <ul className="dropdown-menu dropdown-menu-right">
		    <li><a onClick={() => onEquipmentClick('Lawn Mower')}>Lawn mower</a></li>
		    <li><a onClick={() => onEquipmentClick('Weed Eater')}>Weed Eater</a></li>
				<li><a onClick={() => onEquipmentClick('Mulch Truck')}>Truck for Mulch</a></li>
				<li><a onClick={() => onEquipmentClick('Edger')}>Edger</a></li>
				<li><a onClick={() => onEquipmentClick('Hedge Trimmer')}>Hedgetrimmer</a></li>
		    <li><a onClick={() => onEquipmentClick('Chainsaw')}>Chainsaw</a></li>
				<li><a onClick={() => onEquipmentClick('Aerator')}>Aerator</a></li>
				<li><a onClick={() => onEquipmentClick('Seeder')}>Seeder</a></li>
		  </ul>
		</div>

export default EditEquipmentInfo
