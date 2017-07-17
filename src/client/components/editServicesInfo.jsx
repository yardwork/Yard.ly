import React from 'react'

const EditServicesInfo = ({ onServicesClick }) =>
	<div>
		<div className="dropdown">
		  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Add/Remove Services
		  <span className="caret"></span></button>
		  <ul className="dropdown-menu">
		    <li><a href="#" onClick={() => onServicesClick('aerating')}>Aerating</a></li>
		    <li><a href="#" onClick={() => onServicesClick('edging')}>Edging</a></li>
		    <li><a href="#" onClick={() => onServicesClick('fertilizing')}>Fertilizing</a></li>
				<li><a href="#" onClick={() => onServicesClick('grassseeding')}>Grassseeding</a></li>
				<li><a href="#" onClick={() => onServicesClick('hedgetrimming')}>hedgetrimming</a></li>
				<li><a href="#" onClick={() => onServicesClick('mowing')}>Mowing</a></li>
				<li><a href="#" onClick={() => onServicesClick('mulching')}>Mulching</a></li>
				<li><a href="#" onClick={() => onServicesClick('planting')}>Planting</a></li>
				<li><a href="#" onClick={() => onServicesClick('treetrimming')}>Tree trimming</a></li>
				<li><a href="#" onClick={() => onServicesClick('weedeating')}>Weedeating</a></li>
				<li><a href="#" onClick={() => onServicesClick('weeding')}>Weeding</a></li>
		  </ul>
		</div>
	</div>

export default EditServicesInfo
