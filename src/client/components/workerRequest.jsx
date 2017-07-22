import React from 'react'
import {
  requestsUpdateRoute,
} from '../../server/routes.js'

class WorkerRequest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      jobname: props.jobname,
      date: props.date,
      time: props.time,
      rate: props.rate,
      hours: props.hours,
      address: props.address,
      equipment: props.equipment,
      services: props.services,
      accepted: props.accepted,
      id: props.id,
      request: props.request,
      onAcceptRequestClick: props.onAcceptRequestClick,
    }
		this.equipmentItems = Object.keys(props.equipment).map(function(key) {
			var e
			if (props.equipment[key] === true) {
				e = key
			}
			return <p>{e}</p>
		})
		this.servicesItems = Object.keys(props.services).map(function(key) {
			var e
			if (props.services[key] === true) {
				e = key
			}
			return <p>{e}</p>
		})
    this.acceptRequest = this.acceptRequest.bind(this)
    this.updateRequest = this.updateRequest.bind(this)
  }

  updateRequest(requestId, request) {
    fetch('/api'.concat(requestsUpdateRoute(requestId)), {
      headers: { 'Content-type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(request),
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(request => {
        console.log('request~~~~~', request)
        if (request) {
          this.setState({ request: request, accepted: request.accepted }, () =>
            console.log('this.state after update', this.state.request),
          )
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  acceptRequest(accepted) {
    var request = this.state.request
    request.accepted = !accepted
    this.setState({
      request: request,
    }, ()=>this.updateRequest(this.state.id, this.state.request))
  }
	render() {
		return (
			<div>
				<div className="panel-heading">
					<h3 className="panel-title">{`${this.state.jobname}`}</h3>
				</div>
				<div className="panel-body">
					<div className="panel-contact-info">
						<p>{this.state.date} at {this.state.time}</p>
						<p>{this.state.rate} $/hr for {this.state.hours} hours = ${this.state.hours * this.state.rate}</p>
            <div><h3>Requested Services: </h3>{this.servicesItems}</div>
						<div><h3>Requested Equipment: </h3>{this.equipmentItems}</div>
            <p>
              Address: {this.state.address.address} City: {this.state.address.city} State:{this.state.address.state}
                    Zip: {this.state.address.zipcode}
            </p>
            <p>{this.state.accepted ? 'Accepted' : 'Being Reviewed'}</p>
					</div>
				</div>
				<button onClick={ () => this.acceptRequest(this.state.accepted)}>
					{this.state.accepted ? 'Decline Job' : 'Accept Job'}
				</button>
			</div>
		)
	}
}

export default WorkerRequest
