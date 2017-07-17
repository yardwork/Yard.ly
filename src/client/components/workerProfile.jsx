import React from 'react'
import WorkerInfo from './workerInfo.jsx'
import {
	workersUpdateRoute,
  workersShowRoute,
} from '../../server/routes.js'

class WorkerProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      worker: {},
      contactInfo: {},
      phoneNumber: '',
      image: '',
      equipment: {},
    }
    // this.submitContactInfo = this.submitContactInfo.bind(this)
    this.submitEmail = this.submitEmail.bind(this)
    this.submitPhone = this.submitPhone.bind(this)
    this.submitArea = this.submitArea.bind(this)

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
					this.setState({ worker: data })
				}
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
			})
			.catch(err => {
				console.log(err)
			})

  }
  componentDidMount() {
    this.getWorker(this.props.worker._id)
  }
  render() {
    return (
      <div>
        <div>profile</div>{console.log('worker',this.props.worker)}
        <div>{this.props.worker.firstName} {this.props.worker.lastName}</div>
        <WorkerInfo worker={this.props.worker} submitArea={this.submitArea} submitEmail={this.submitEmail} submitPhone={this.submitPhone}/>
      </div>
    )
  }
}

export default WorkerProfile
