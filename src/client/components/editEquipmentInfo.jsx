import React from 'react'

const EditEquipmentInfo = ({ onEquipmentClick }) =>
	<div>
		<div className="dropdown">
		  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Equipment
		  <span className="caret"></span></button>
		  <ul className="dropdown-menu">
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
	</div>

export default EditEquipmentInfo
