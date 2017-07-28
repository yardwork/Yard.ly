import React, { Component } from 'react'
import { requestsDeleteRoute, workersUpdateRoute } from '../../server/routes.js'

class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: props.id || '597b762ae14901519e42f5ca',
      rating: 10,
      completion: 100,
      total: props.request.rate * props.request.hours || 0,
			wid: props.wid || '597b6c9de14901519e42f5c6',
			worker: props.worker || {
				_id: '597b6c9de14901519e42f5c6',
				username: 'worker',
				password:
					'$2a$10$Y8rKycL2cFbkyg/ae7lgQu7PfUScKrAdcXU9qYV1wDIZVfoeLBwN2',
				services: {
					Mowing: true,
					'Tree Trimming': false,
					Edging: true,
					'Weed Eating': false,
					'Hedge Trimming': true,
					Fertilizing: false,
					Aerating: true,
					Mulching: true,
					Weeding: false,
					Planting: true,
					'Grass Seeding': false,
				},
				equipment: {
					'Lawn Mower': true,
					'Weed Eater': false,
					'Mulch Truck': true,
					Edger: true,
					'Hedge Trimmer': false,
					Chainsaw: false,
					'Lawn Aerator': false,
					Seeder: true,
					Aerator: true,
				},
				firstName: 'Jerry',
				lastName: 'Garcia',
				contactInfo: {
					email: 'jerry@haight.com',
				},
				address: {
					address: '',
					city: '',
					state: '',
					zipcode: '',
				},
				rate: 1000,
				radius: 5,
				__v: 0,
				area: 'Austin',
				image:
					'http://www.billboard.com/files/styles/article_main_image/public/media/woodstock-garcia-1969-billboard-650.jpg',
				requests: [
          {
            rating: 9.5,
            completion: 100,
            total: 80,
          }
        ],
			},
			request: props.request || {
				_id: '596ea14dfc15ae7f50000871',
				jobname: 'first job',
				userId: '5967cae93f9ebb1cc30f37a3',
				workerId: '596cfa1c6dbacc72e88b9509',
				accepted: false,
				services: {
					Mowing: true,
					'Tree Trimming': false,
					Edging: true,
					'Weed Eating': true,
					'Hedge Trimming': false,
					Fertilizing: true,
					Aerating: false,
					Mulching: true,
					Weeding: false,
					planting: true,
					'Grass Seeding': true,
				},
				equipment: {
					'Lawn Mower': true,
					'Weed Eater': false,
					'Mulch Truck': true,
					Edger: true,
					'Hedge Trimmer': true,
					Chainsaw: false,
					'Lawn Aerator': true,
					Seeder: false,
				},
				address: {
					zipcode: '78633',
					state: 'Texas',
					city: 'Georgetown',
					address: '124 Great Frontier dr',
					coordinates: {
						lat: 30.7144741,
						lng: -97.7286564,
					},
				},
				time: '1:21 pm',
				hours: 4,
				rate: 20,
				date: 'August 21 2017',
				image:
					'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
			},
		}
		this.deleteRequest = this.deleteRequest.bind(this)
    this.rateWorker = this.rateWorker.bind(this)
    this.formChange = this.formChange.bind(this)
		this.compChange = this.compChange.bind(this)
	}
	deleteRequest(id) {
		fetch('/api'.concat(requestsDeleteRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'DELETE',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				this.setState({ request: data }, ()=> $('#completion-modal').modal('hide'))
			})
			.catch(err => {
				console.log(err)
			})
	}
	updateWorker(id, worker) {
		this.rateWorker()
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
					this.setState({ worker: data }, () =>
						console.log('this.state after update', this.state.worker),
					)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
  formChange(e){
    console.log(e.target.value);
    this.setState({
      rating: e.target.value,
      total: this.state.request.rate * this.state.request.hours,
    })
  }
	compChange(e){
		console.log(e.target.value);
		this.setState({
			completion: e.target.value,
			total: this.state.request.rate * this.state.request.hours,
		})
	}
  rateWorker(){
    var worker = {
      ...this.state.worker,
      requests: [
        ...this.state.requests,
        {
          rating: this.state.rating,
          completion: this.state.completion,
          total: this.state.total,
        }
      ]
    }
    this.updateWorker(this.state.wid, this.state.worker)
  }
	componentDidMount() {
	}
	render() {
		return (
			<div
		    className="modal fade modal-inverse"
		    id="completion-modal"
		    tabIndex="-1"
		    role="dialog"
		    aria-labelledby="mySmallModalLabel"
		  >
		    <div className="modal-dialog modal-sm" role="document">
		      <div className="modal-content">
		        <div className="modal-header">
		          <button
		            type="button"
		            className="close"
		            data-dismiss="modal"
		            aria-label="Close"
		          >
		            <span aria-hidden="true">&times;</span>
		          </button>
		          <h4 className="modal-title" id="myModalLabel">
		            Rate your worker!
		          </h4>
		        </div>
		        <div className="modal-body" >
		          <input id="Rating" type="text" className="form-control" placeholder="Rating" onChange={this.formChange}/>
		          <input id="Completion" type="text" className="form-control" placeholder="Completion" onChange={this.compChange}/>
		        </div>
		        <div className="modal-footer">
							<img src="https://cdn4.iconfinder.com/data/icons/online-casinos/512/Paypal-128.png" onClick={()=> alert("You have just paid your worker" + '"' + this.state.total + '"' + " dollars please take the time to rate your worker" )}></img>
		          <button
		            type="button"
		            className="btn btn-default"
		            data-dismiss="modal"
		          >
		            Close
		          </button>
		          <button type="button" className="btn btn-primary" onClick={() => this.deleteRequest(this.state.id)}>
		            Submit
		          </button>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Modal
