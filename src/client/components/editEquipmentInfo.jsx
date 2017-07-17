import React from 'react'

const EditEquipmentInfo = ({ onEquipmentClick }) =>
	<div>
		<div className="dropdown">
		  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Equipment
		  <span className="caret"></span></button>
		  <ul className="dropdown-menu">
		    <li><a href="#" onClick={() => onEquipmentClick('lawnmower')}>Lawn mower</a></li>
		    <li><a href="#" onClick={() => onEquipmentClick('weedeater')}>Weed Eater</a></li>
		    <li><a href="#" onClick={() => onEquipmentClick('chainsaw')}>Chainsaw</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('chainsaw')}>Chainsaw</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('aerator')}>Aerator</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('edger')}>Edger</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('hedgetrimmer')}>Hedgetrimmer</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('mulchtruck')}>Truck for Mulch</a></li>
				<li><a href="#" onClick={() => onEquipmentClick('seeder')}>Seeder</a></li>
		  </ul>
		</div>
	</div>

export default EditEquipmentInfo
