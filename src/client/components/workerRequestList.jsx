import React from 'react'
import WorkerRequest from './workerRequest.jsx'

const WorkerRequestList = props =>
	<div className="container">
		<div className="row">
			<div className="col-sm-10 col-sm-offset-1">
				<div className="worker-list-container">
					{props.requests.map((request, i) =>
						<WorkerRequest
							type={props.type}
							key={i}
							request={request}
							workerId={request.workerId}
							userId={request.userId}
							id={request._id}
							jobname={request.jobname}
							date={request.date}
							dt={request.dt}
							time={request.time}
							rate={request.rate}
							hours={request.hours}
							address={request.address}
							equipment={request.equipment}
							services={request.services}
							accepted={request.accepted}
							workerFirst={request.workerFirst}
							userFirst={request.userFirst}
						/>,
					)}
				</div>
			</div>
			<div className="space-200" />
		</div>
	</div>

export default WorkerRequestList
