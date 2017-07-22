import React from 'react'

const ServicesInfo = ( {servicesInfo} ) => {

  const listItems = Object.keys(servicesInfo).map(function (key) {
    // console.log('asfasdf')
    return (

      <div
        className={servicesInfo[key] ? "col-xs-6 col-sm-3 col-md-2 service-entry checked" : "col-xs-6 col-sm-3 col-md-2 service-entry"}
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
    <div className="container-fluid services">
      <h4>Available Services</h4>
      {listItems}
    </div>
  )
}

export default ServicesInfo
