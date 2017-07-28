import React from 'react'
import EditServicesInfo from './editServicesInfo.jsx'

const ServicesInfo = ( {servicesInfo, currId, worker, onServicesClick} ) => {

  const listItems = Object.keys(servicesInfo).map(function (key) {
    // console.log('asfasdf')
    return (

      <div
        className={servicesInfo[key] ? "col-xs-5 col-sm-4 col-md-3 col-lg-2 service-entry checked" : "col-xs-5 col-sm-4 col-md-3 col-lg-2 service-entry"}
        key={key}
      >
        {servicesInfo[key]
          ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> }
        {' ' + key}
      </div>
    )
  })

  // console.log(Object.keys(servicesInfo))
  // console.log(listItems)
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">Available Services
          { currId === worker._id
            ? <EditServicesInfo onServicesClick={onServicesClick} />
            : console.log(`${currId} doesn't match ${worker._id}`)}
        </h4>
      </div>
      <div className="panel-body container-fluid">
        {listItems}
      </div>
    </div>
  )
}

export default ServicesInfo
