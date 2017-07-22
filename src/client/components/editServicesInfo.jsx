import React from 'react'

const EditServicesInfo = ({ onServicesClick }) =>
	<div>
		<div className="dropdown">
		  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Services
		  <span className="caret"></span></button>
		  <ul className="dropdown-menu">
				<li><a onClick={() => onServicesClick('Mowing')}>Mowing</a></li>
				<li><a onClick={() => onServicesClick('Tree Trimming')}>Tree Trimming</a></li>
				<li><a onClick={() => onServicesClick('Edging')}>Edging</a></li>
				<li><a onClick={() => onServicesClick('Weed Eating')}>Weed Eating</a></li>
				<li><a onClick={() => onServicesClick('Hedge Trimming')}>Hedge Trimming</a></li>
		    <li><a onClick={() => onServicesClick('Aerating')}>Aerating</a></li>
				<li><a onClick={() => onServicesClick('Mulching')}>Mulching</a></li>
				<li><a onClick={() => onServicesClick('Weeding')}>Weeding</a></li>
				<li><a onClick={() => onServicesClick('Planting')}>Planting</a></li>
				<li><a onClick={() => onServicesClick('Grass Seeding')}>Grassseeding</a></li>
				<li><a onClick={() => onServicesClick('Fertilizing')}>Fertilizing</a></li>
		  </ul>
		</div>
	</div>

export default EditServicesInfo
