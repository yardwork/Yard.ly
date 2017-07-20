export const data = {
  {
  	model: 'Worker',
  	documents: [
  		{
  			username: 'raquel',
  			password: '$2a$10$qOibrXReGgRuq5hwqHDB9usXCXAYieBAchmCZOmga3/GO7.Dq6GfC',
  			services: {
  				Mowing: true,
  				TreeTrimming: false,
  				Edging: true,
  				WeedEating: true,
  				HedgeTrimming: false,
  				Fertilizing: true,
  				Aerating: false,
  				Mulching: true,
  				Weeding: false,
  				Planting: true,
  				GrassSeeding: true,
  			},
  			equipment: {
  				LawnMower: true,
  				WeedEater: false,
  				MulchTruck: true,
  				Edger: true,
  				HedgeTrimmer: true,
  				Chainsaw: false,
  				Aerator: true,
  				Seeder: false,
  			},
  			area: 'Gafanha da Encarnação',
  			firstName: 'Raquel',
  			lastName: 'Sherel',
  			contactInfo: {
  				email: 'raquel@email',
  				phoneNumber: '(666)666-6666',
  			},
  			__v: 0,
  			requests: [],
  		},
  	],
  },
  {
    model: 'Request',
  	documents: [
  		{
  			jobname: 'first job',
  			userId: '5967cae93f9ebb1cc30f37a3',
  			workerId: '596cfa1c6dbacc72e88b9509',
  			accepted: false,
  			services: {
  				Mowing: true,
  				TreeTrimming: false,
  				Edging: true,
  				WeedEating: true,
  				HedgeTrimming: false,
  				Fertilizing: true,
  				Aerating: false,
  				Mulching: true,
  				Weeding: false,
  				Planting: true,
  				GrassSeeding: true,
  			},
  			equipment: {
  				LawnMower: true,
  				WeedEater: false,
  				MulchTruck: true,
  				Edger: true,
  				HedgeTrimmer: true,
  				Chainsaw: false,
  				Aerator: true,
  				Seeder: false,
  			},
  			address: {
  				zipcode: '78633',
  				state: 'Texas',
  				city: 'Georgetown',
  				address: '124 Great Frontier dr',
  			},
  			time: '1:21pm',
  			date: 'August 21 2017',
  			image:
  				'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
  		},
  	]
  },
  {
  	model: 'User',
  	documents: [
  		{
  			username: 'afylan2',
  			password: '1L4bPr2',
  			contactInfo: {
  				email: 'worker@email.com',
  				phoneNumber: '(444)444-4444',
  			},
  			addresses: [
  				{
  					zipcode: '78602',
  					state: 'Texas',
  					city: 'Austin',
  					address: '4702 Hilldale dr.',
  				},
  				{
  					zipcode: '78633',
  					state: 'Texas',
  					city: 'Georgetown',
  					address: '124 Great Frontier dr',
  				},
  			],
  		},
  	],
  }
}
