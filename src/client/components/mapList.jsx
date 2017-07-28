import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {getMarkerHolderStyle, getMarkerStyle, getMarkerTextStyle} from './markerStyle.js'

const AnyReactComponent = ({ text, accepted }) => <div className="marker">{accepted ? <img src="http://ardupilot.org/copter/_static/favicon_copter.ico"></img> : <img src="https://www.fastline.com/images/eq_icon_color.png"></img>}{text}</div>

class MapList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requests: [        {
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
									lat: 30.7144741,
									lng: -97.7286564,
			          },
			          time: '1:21 pm',
			          hours: 4,
			          rate: 20,
			          date: 'August 21 2017',
			          image:
			            'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
			        },
			        {
			          _id: '596ea14dfc15ae7f50000872',
			          jobname: 'second job',
			          userId: '5967cae93f9ebb1cc30f37a3',
			          workerId: '596cfa1c6dbacc72e88b9509',
			          accepted: true,
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
			            zipcode: '78602',
			            state: 'Texas',
			            city: 'Austin',
			            address: '4702 Hilldale dr',
									lat: 30.2873603,
									lng: -97.6742261,
			          },
			          time: '1:21 pm',
			          hours: 4,
			          rate: 20,
			          date: 'August 21 2017',
			          image:
			            'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
			        },],
			coordinates: {
				lat: 30.279305,
				lng: -97.74175,
			},
			markercoordinates: {
				lat: 30.287249,
				lng: -97.671713,
			},
		}
	}
	getCoor(address) {
		var add = address.address.split(' ').join('')
		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${add}`,
			{
				method: 'GET',
			},
		)
			.then(res => {
				return res.json()
			})
			.then(obj => {
				console.log(obj)
				this.setState({ markercoordinates: obj.results[0].geometry.location })
			})
	}
	componentDidMount() {
		fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=Austintx`,
			{
				method: 'GET',
			},
		)
			.then(res => {
				return res.json()
			})
			.then(obj => {
				console.log(obj)
				this.setState({ markercoordinates: obj.results[0].geometry.location })
			})
	}
	render() {
		return (
			<div className="worker-container">
				<div className="listing-pic">
					<GoogleMapReact center={this.state.coordinates} defaultZoom={9}>
						{this.state.requests.map((request, i)=>{
						return <AnyReactComponent
							key={i}
							accepted={request.accepted}
							lat={request.address.lat}
							lng={request.address.lng}
							text={request.jobname}
						/>
					})}
					</GoogleMapReact>
				</div>
			</div>
		)
	}
}

export default MapList
