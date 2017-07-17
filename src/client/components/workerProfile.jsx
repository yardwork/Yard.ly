import React from 'react'
import WorkerInfo from './workerInfo.jsx'
import EquipmentServicesInfo from './equipmentServicesInfo.jsx'
import {
	workersUpdateRoute,
  workersShowRoute,
} from '../../server/routes.js'

class WorkerProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      worker: {
        username: '',
        password: '',
        services: { mowing: false, treetrimming: false, edging: false, weedeating: false, hedgetrimming: false, fertilizing: false, aerating: false, mulching: false, weeding: false, planting: false, grassseeding: false },
        equipment: { lawnmower: false, weedeater: false, mulchtruck: false, edger: false, hedgetrimmer: true, chainsaw: false, aerator: false, seeder: false},
        area: '',
        firstName: '',
        lastName: '',
        contactInfo:{
          phoneNumber: '',
          email: '',
        },
        image: '',
        address: {
          address: '',
          city: '',
          state: '',
          zipcode: '',
        }
      }
    }
    // this.submitContactInfo = this.submitContactInfo.bind(this)
    this.submitEmail = this.submitEmail.bind(this)
    this.submitPhone = this.submitPhone.bind(this)
    this.submitArea = this.submitArea.bind(this)
    this.getWorker = this.getWorker.bind(this)
    this.updateWorker = this.updateWorker.bind(this)
		this.changeEquipment = this.changeEquipment.bind(this)
		this.onEquipmentClick = this.onEquipmentClick.bind(this)
		this.changeService = this.changeService.bind(this)
		this.onServicesClick = this.onServicesClick.bind(this)
		this.submitImage = this.submitImage.bind(this)

  }
  submitEmail(e){
    e.preventDefault()
    var worker = this.state.worker
    worker.contactInfo.email = e.target.email.value !== '' ? e.target.email.value: worker.contactInfo.email
    this.setState ({
      worker: worker,
    }, () => this.updateWorker(this.state.worker._id, this.state.worker))
  }
  submitPhone(e){
    e.preventDefault()
    var worker = this.state.worker
    worker.contactInfo.phoneNumber = e.target.phoneNumber.value !== '' ? e.target.phoneNumber.value: worker.contactInfo.phoneNumber
    this.setState ({
      worker: worker,
    }, () => this.updateWorker(this.state.worker._id, this.state.worker))
  }
  submitArea(e){
    e.preventDefault()
    var worker = this.state.worker
    worker.area = e.target.area.value !== '' ? e.target.area.value: worker.area
    this.setState ({
      worker: worker
    }, () => this.updateWorker(this.state.worker._id, this.state.worker))

  }
	submitImage(e){
		e.preventDefault()
		var worker = this.state.worker
		console.log(e.target.image.value)
		worker.image = e.target.image.value !== '' ? e.target.image.value: worker.image
		this.setState ({
			worker: worker
		}, () => this.updateWorker(this.state.worker._id, this.state.worker))
	}
  getWorker(id){
    fetch('/api'.concat(workersShowRoute(id)), {
      headers: { 'Content-type': 'application/json' },
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data => {
        console.log('~~~~~~~worker', data)
        this.setState({ worker: data })
      })
      .then(() => console.log("~~~~~~state", this.state))
  }
  updateWorker(id, worker) {
    fetch('/api'.concat(workersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(worker),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				console.log('data', data)
				if (data) {
					this.setState({ worker: data }, () => console.log('this.state after update', this.state.worker))
				}
			})
      .then(() => {
        this.getWorker(this.props.worker._id)
      })
			.then(() => {
        document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
				document.getElementById('image').value = ''
			})
			.catch(err => {
				console.log(err)
			})

  }
	onEquipmentClick(e) {
		this.changeEquipment(e)
	}
	changeEquipment(type) {
		var worker = this.state.worker
		worker.equipment[type][0] = !worker.equipment[type][0]
		this.setState ({
			worker: worker,
		}, () => this.updateWorker(this.state.worker._id, this.state.worker))
	}
	onServicesClick(e) {
		this.changeService(e)
	}
	changeService(type) {
		var worker = this.state.worker
		worker.services[type] = !worker.services[type]
		this.setState ({
			worker: worker,
		}, () => this.updateWorker(this.state.worker._id, this.state.worker))
	}
  componentDidMount() {
    this.getWorker(this.props.worker._id)
  }
  render() {
    return (
      <div>
        <div>profile</div>{console.log('worker',this.props.worker)}
        <div>{this.state.worker.firstName} {this.state.worker.lastName}</div>
        <WorkerInfo worker={this.state.worker} submitArea={this.submitArea} submitEmail={this.submitEmail} submitPhone={this.submitPhone}/>
        <EquipmentServicesInfo submitImage={this.submitImage} worker={this.state.worker} onEquipmentClick={this.onEquipmentClick} onServicesClick={this.onServicesClick}/>
      </div>
    )
  }
}

export default WorkerProfile
