import React from 'react'
import Worker from './worker.jsx'

const WorkerList = ({ workers, onWorkerClick }) => (
  <div className="home-page-container">
    <div id="bg">
      <img
        src="green-lawn-resampled.jpg"
        alt=""
      />
    </div>
    <ul className="worker-list-container">
      {workers.map((worker, i) => (
        <Worker key={i} {...worker} />
      ))}
    </ul>
  </div>
)

export default WorkerList
