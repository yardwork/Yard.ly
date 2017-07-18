import React, { Component } from 'react'

import Home from './home.jsx'
import AddressFormParent from './addressFormParent.jsx'

const workers = [
  {
    _id: '596cfa1c6dbacc72e88b9509',
    username: '',
    password: '',
    services: { mowing: true, treetrimming: false, edging: true, weedeating: true, hedgetrimming: false, fertilizing: true, aerating: false, mulching: true, weeding: false, planting: true, grassseeding: true },
    equipment: { lawnmower: [true, ''], weedeater: [false, ''], mulchtruck: [true, ''], edger: [true, ''], hedgetrimmer: [true, ''], chainsaw: [false, ''], aerator: [true, ''], seeder: [false, '']},
    area: 'Austin',
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
  },
  {
    username: 'jlighten1',
    password: 'u1eAzHJmfz',
    services: { thing: '59654f5afc13ae4df4000015' },
    area: 'Austin',
    firstName: 'Junina',
    lastName: 'Lighten',
  },
  {
    username: 'smelmar2',
    password: 'qQrrSX',
    services: { thing: '59654f5afc13ae4df4000016' },
    area: 'Austin',
    firstName: 'Staffard',
    lastName: 'Melmar',
  },
  {
    username: 'pbadder3',
    password: 'siw1P9bwnpti',
    services: { thing: '59654f5afc13ae4df4000017' },
    area: 'Gampang',
    firstName: 'Pearle',
    lastName: 'Badder',
  },
  {
    username: 'acorrie4',
    password: 'jzhGc1yQ',
    services: { thing: '59654f5afc13ae4df4000018' },
    area: 'Zākhū',
    firstName: 'Alverta',
    lastName: 'Corrie',
  },
  {
    username: 'lrobinet5',
    password: 'sdCakVlAcxb',
    services: { thing: '59654f5afc13ae4df4000019' },
    area: 'Fengcheng',
    firstName: 'Laurie',
    lastName: 'Robinet',
  },
  {
    username: 'btowsie6',
    password: 'cO0a5Cum6rTo',
    services: { thing: '59654f5afc13ae4df400001a' },
    area: 'El Cacao',
    firstName: 'Bertha',
    lastName: 'Towsie',
  },
  {
    username: 'pfiddler7',
    password: '3Vj7RB',
    services: { thing: '59654f5afc13ae4df400001b' },
    area: 'Baozhu',
    firstName: 'Pepillo',
    lastName: 'Fiddler',
  },
  {
    username: 'tedginton8',
    password: 'bDXdVDPuKU',
    services: { thing: '59654f5afc13ae4df400001c' },
    area: 'Pil’na',
    firstName: 'Tammy',
    lastName: 'Edginton',
  },
  {
    username: 'paspling9',
    password: 't1vxafs',
    services: { thing: '59654f5afc13ae4df400001d' },
    area: 'Luxi',
    firstName: 'Patin',
    lastName: 'Aspling',
  },
  {
    username: 'mcraydena',
    password: 'exmmWF9yG49',
    services: { thing: '59654f5afc13ae4df400001e' },
    area: 'Kyzyl-Kyya',
    firstName: 'Merrilee',
    lastName: 'Crayden',
  },
  {
    username: 'ckiddyb',
    password: 'TVl61N4Mv',
    services: { thing: '59654f5afc13ae4df400001f' },
    area: 'Staropyshminsk',
    firstName: 'Cyrill',
    lastName: 'Kiddy',
  },
  {
    username: 'sgoodluckc',
    password: 'xc2RYLZ',
    services: { thing: '59654f5afc13ae4df4000020' },
    area: 'Zhangdian',
    firstName: 'Stacy',
    lastName: 'Goodluck',
  },
  {
    username: 'cfeldkleind',
    password: 'HwXqvaAzZs',
    services: { thing: '59654f5afc13ae4df4000021' },
    area: 'Triolet',
    firstName: 'Cornell',
    lastName: 'Feldklein',
  },
  {
    username: 'astarmoree',
    password: 'dWDFkBOXYkvZ',
    services: { thing: '59654f5afc13ae4df4000022' },
    area: 'Zhenchuan',
    firstName: 'Archambault',
    lastName: 'Starmore',
  },
  {
    username: 'btockf',
    password: 'W5jfTf4atj5',
    services: { thing: '59654f5afc13ae4df4000023' },
    area: 'Persen',
    firstName: 'Bekki',
    lastName: 'Tock',
  },
  {
    username: 'mgantlettg',
    password: '7Xlqs7UC',
    services: { thing: '59654f5afc13ae4df4000024' },
    area: 'Capellanía',
    firstName: 'Montague',
    lastName: 'Gantlett',
  },
  {
    username: 'gredsallh',
    password: 'rfn7OWXv',
    services: { thing: '59654f5afc13ae4df4000025' },
    area: 'Villasis',
    firstName: 'Gradeigh',
    lastName: 'Redsall',
  },
  {
    username: 'owhitrodi',
    password: 'arrkC3lz',
    services: { thing: '59654f5afc13ae4df4000026' },
    area: 'Sanshandao',
    firstName: 'Orion',
    lastName: 'Whitrod',
  },
  {
    username: 'plowreyj',
    password: 'K0czQrPIc',
    services: { thing: '59654f5afc13ae4df4000027' },
    area: 'Utmānzai',
    firstName: 'Page',
    lastName: 'Lowrey',
  },
]
const user = {
				__v: 0,
				username: 'afylan2',
				password:
					'1L4bPr2',
				_id: '5967cae93f9ebb1cc30f37a3',
				addresses: [],
			}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workers
    }
  }

  render() {
    return (
      <div>
        <Home workers={this.state.workers} />
        <AddressFormParent user={user} />
      </div>

    )
  }
}

export default App
