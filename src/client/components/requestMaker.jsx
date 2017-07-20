import React, { Component } from 'react'
import PickaDate from './pickaDate.jsx'
import PickaServiceEquipment from './pickaServiceEquipment.jsx'
import {REQUESTS_CREATE} from './../../server/routes.js'
class RequestMaker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: null,
      services: { Mowing: false, TreeTrimming: false, Edging: false, Weedeating: false, HedgeTrimming: false, Fertilizing: false, Aerating: false, Mulching: false, Weeding: false, Planting: false, GrassSeeding: false },
      equipment: { LawnMower: false, Weedeater: false, MulchTruck: false, Edger: false, HedgeTrimmer: false, Chainsaw: false, LawnAerator: false, Seeder: false},
			requests: [],
			jobname: 'Yardwork',
		}
		this.onServicesClick = this.onServicesClick.bind(this)
		this.onEquipmentClick = this.onEquipmentClick.bind(this)
		this.setDate = this.setDate.bind(this)
		this.submitRequest = this.submitRequest.bind(this)
		this.changeJobName = this.changeJobName.bind(this)
	}
  onServicesClick(type){
    var services = this.state.services
		services[type] = !services[type]
    this.setState({
      services: services,
    })
  }
  onEquipmentClick(type){
    var equipment = this.state.equipment
    equipment[type] = !equipment[type]
    this.setState({
      equipment: equipment,
    })
  }
  setDate(date) {
    this.setState({
      date: date,
    })
  }
  submitRequest() {
    fetch('/api'.concat(REQUESTS_CREATE), {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({jobname: this.state.jobname, userId: this.props.user._id, workerId: this.props.worker._id, accepted: false, services: this.state.services, equipment: this.state.equipment, address: this.props.user.address, time: "2:00pm", image: "http://1.bp.blogspot.com/-gzCQGs87A3Y/VYNMq0zff1I/AAAAAAAAmoE/LAVO2uK5Efg/s1600/pinned%2Blawn%2Bmower.JPG", date: this.state.date }),
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(request => {
        console.log('request~~~~~', request)
        if (request) {
          this.setState({ request: request }, () => console.log('this.state after update', this.state.request))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
	changeJobName (e) {
		e.preventDefault()
		this.setState({
			jobname: e.target.value,
		})
	}
	render() {
		return (
			<div>
				<h1>Make a request</h1>
				<form onChange={this.changeJobName}>
					<input type="text"  placeholder="Jobname" />
				</form>
				<PickaServiceEquipment
					equipment={this.props.worker.equipment}
					services={this.props.worker.services}
          onServicesClick={this.onServicesClick}
          onEquipmentClick={this.onEquipmentClick}
				/>
        <PickaDate setDate={this.setDate} />
        <div>
          <button onClick={() => this.submitRequest()}>
            Submit
          </button>
        </div>
			</div>
		)
	}
}

export default RequestMaker
