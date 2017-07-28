import React from 'react'

const EditServicesInfo = ({ onServicesClick }) =>
		<div className="dropdown" style={{float: 'right'}}>
		<div className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}}>
			<span className="panel-title"><small>EDIT </small></span>
		  <span className="caret"></span>
		</div>
		  <ul className="dropdown-menu dropdown-menu-right">
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

export default EditServicesInfo
