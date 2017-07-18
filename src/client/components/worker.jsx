import React from 'react'
import { Link } from 'react-router-dom'

const Worker = ({ onClick, clicked, username, firstName, lastName, services, equipment, contactInfo, _id }) => (
  <div className="panel panel-default"
        onClick={onClick}
        style={{
          color: clicked ? 'red' : 'inherit',
        }}
  >
    <div className="panel-heading">
      <Link to={`/profile/${_id}`}>
      <h3 className="panel-title">{`${firstName} ${lastName}`}</h3>
      </Link>
    </div>
    <div className="panel-body">
      <div className="panel-contact-info">
        <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {contactInfo ? contactInfo.phoneNumber : 'Contact info not found'}</p>
        <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> {contactInfo ? contactInfo.email : 'Contact info not found'}</p>
      </div>
    </div>
    <div>
    {/* photo */}
    </div>
  </div>
)

export default Worker
