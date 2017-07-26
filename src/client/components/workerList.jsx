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
  {workers[0] ?
    <ul className="worker-list-container">
      {workers.map((worker, i) => (
        <Worker key={i} {...worker} />
      ))}
    </ul>
     : <h1 className="logo">Yardly</h1>
  }
  </div>
)

export default WorkerList
