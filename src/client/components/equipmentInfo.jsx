import React from 'react'

const EquipmentInfo = ( {equipment} ) => {

  const listItems = Object.keys(equipment).map(function (key) {
    // console.log('asfasdf')
    return (
      <div
        className={equipment[key] ? "col-xs-5 col-sm-4 col-md-3 col-lg-2 service-entry checked" : "col-xs-5 col-sm-4 col-md-3 col-lg-2 service-entry"}
        key={key}
      >
        {equipment[key]
          ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> }
        {' ' + key}
      </div>
    )
  })

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">Available Equipment</h4>
      </div>
      <div className="panel-body container-fluid">
        {listItems}
      </div>
    </div>
  )
}

export default EquipmentInfo
