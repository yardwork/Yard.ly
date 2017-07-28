import React from 'react'
import EditServicesInfo from './editServicesInfo.jsx'

const ServicesInfo = ( {servicesInfo, currId, worker, onServicesClick} ) => {

  const listItems = Object.keys(servicesInfo).map(function (key) {
    // console.log('asfasdf')
    return (

      <div
        className={servicesInfo[key] ? "col-xs-6 col-sm-4 col-md-3 col-lg-2 no-padding checked" : "col-xs-6 col-sm-4 col-md-3 col-lg-2 no-padding"}
        key={key}
      >
      <div className={servicesInfo[key] ? "service-entry checked" : "service-entry"}>
        {servicesInfo[key]
          ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> }
        {' ' + key}
      </div>
      </div>
    )
  })

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">Available Services
          { currId === worker._id
            ? <EditServicesInfo onServicesClick={onServicesClick} />
            : console.log(`${currId} doesn't match ${worker._id}`)}
        </h4>
      </div>
      <div className="panel-body">
        <div className="container-fluid">
        {listItems}
        </div>
      </div>
    </div>
  )
}

export default ServicesInfo
