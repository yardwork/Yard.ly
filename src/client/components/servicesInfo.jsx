import React from 'react'

const ServicesInfo = ( {servicesInfo} ) => {

  const listItems = Object.keys(servicesInfo).map(function (key) {
    // console.log('asfasdf')
    return <ul key={key}>{key} {servicesInfo[key] ? "☑" : "☐" }</ul>
  })
  // console.log(Object.keys(servicesInfo))
  // console.log(listItems)
  return (
    <div className="services">
      <h1>Available Services are marked with a checkbox!</h1>
      {listItems}
    </div>
  )
}

export default ServicesInfo
