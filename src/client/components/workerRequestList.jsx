import React from 'react'
import WorkerRequest from './workerRequest.jsx'
import GoogleMapReact from 'google-map-react'

const WorkerRequestList = props =>
<div className="requests-container" style={{marginTop: '50px'}}>
 <h2 className="text-center">Requests</h2>
				<div className="container-fluid">
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

export default WorkerRequestList
