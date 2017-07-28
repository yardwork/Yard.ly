import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import FixedDataTable from 'fixed-data-table'

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

var rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3'],
]

class MapTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requests: [],
		}
	}
	rowGetter(rowIndex) {
		return rows[rowIndex]
	}
	componentDidMount() {
		{
			/*getCoords(this.props.ktichen.address, this.props.kitchen.area)*/
		}
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Austin`, {
			method: 'GET',
		})
			.then(res => {
				return res.json()
			})
			.then(obj => {
				console.log(obj)
				this.setState({ coordinates: obj.results[0].geometry.location })
			})
	}
	render() {
		return (
			<div>
				<Table
					rowHeight={50}
					rowGetter={this.rowGetter}
					rowsCount={rows.length}
					width={5000}
					height={5000}
					headerHeight={50}
				>
					<Column label="Col 1" width={3000} dataKey={0} />
					<Column label="Col 2" width={2000} dataKey={1} />
				</Table>
			</div>
		)
	}
}

export default MapTable
