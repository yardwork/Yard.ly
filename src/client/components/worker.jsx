import React from 'react'

const Worker = ({ onClick, clicked, firstName, lastName, services, equipment }) => (
  <li
    onClick={onClick}
    style={{
      color: clicked ? 'red' : 'inherit',
    }}
  >
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{`${firstName} ${lastName}`}</h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
      <div>
      {/* photo */}
      </div>
    </div>
  </li>
)

export default Worker
