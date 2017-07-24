import React from 'react'
import WorkerRequest from './workerRequest.jsx'

const WorkerRequestList = (props) =>
	<div className="worker-list-container">
		{props.requests.map((request, i) =>
			<WorkerRequest
        type={props.type}
				key={i}
				request={request}
				wid={request.workerId}
				uid={request.userId}
				id={request._id}
				jobname={request.jobname}
				date={request.date}
				time={request.time}
				rate={request.rate}
				hours={request.hours}
				address={request.address}
				equipment={request.equipment}
				services={request.services}
				accepted={request.accepted}
			/>,
		)}
	</div>

export default WorkerRequestList
