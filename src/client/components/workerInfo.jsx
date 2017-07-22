import React from 'react'
import EditContactInfo from './editContactInfo.jsx'

const WorkerInfo = ({ worker, submitEmail, submitPhone, submitArea, currId }) =>
	<div>
    <div>
      <h2>{worker.firstName} {worker.lastName}</h2>
      <img src={worker.image} width="128px" height="128px" alt="https://previews.123rf.com/images/kadmy/kadmy1308/kadmy130800026/21769667-lawn-mower-worker-man-cutting-grass-in-garden-yard-Stock-Photo.jpg"/>
      <h2>Area: {worker.area}</h2>
      <h2>Phone Number: {worker.contactInfo.phoneNumber}</h2>
      <h2>Email: {worker.contactInfo.email}</h2>
    </div>
		{currId === worker._id
			? <EditContactInfo
					submitArea={submitArea}
					submitEmail={submitEmail}
					submitPhone={submitPhone}
					contactInfo={worker.contactInfo}
					area={worker.area}
				/>
			: ''}
	</div>

export default WorkerInfo
