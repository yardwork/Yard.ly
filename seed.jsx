import mongoose from 'mongoose'
import User from './src/server/db/models/user.js'
import Worker from './src/server/db/models/worker.js'
import Request from './src/server/db/models/request.js'
import user from './src/server/db/data/user.jsx'
import worker from './src/server/db/data/worker.jsx'
import request from './src/server/db/data/request.jsx'


// mongoose.connect('mongodb://localhost/yardly_dev',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// })
// mongoose.connection.on('open', function(){
//     mongoose.connection.db.dropDatabase(function(err, result){
//         // done()
//     })
// })
mongoose.connect('mongodb://localhost/yardly_dev')


const models = {
  user: User,
  worker: Worker,
  request: Request
}

const data = {
  user: user,
  worker: worker,
  request: request
}

const promiseArray = []


Object.keys(data).forEach((key) => {
  for(var i = 0; i < data[key].length; i++) {
    const m = new models[key](data[key][i])
    promiseArray.push(m.save())
  }
})
console.log('promise array', promiseArray)
Promise.all(promiseArray).then(() => mongoose.connection.db.close())
//
// var seeder = require('mongoose-seed');
//
// // Connect to MongoDB via Mongoose
// seeder.connect('mongodb://localhost:3000/api/users/', function() {
//
//     // Load Mongoose models
//     seeder.loadModels([
//         'yard.ly/src/server/db/models/user.js',
//         'yard.ly/src/server/db/models/worker.js',
//         'yard.ly/src/server/db/models/request.js'
//     ]);
//
//     // Clear specified collections
//     seeder.clearModels(['User', 'Worker', 'Request'], function() {
//
//         // Callback to populate DB once collections have been cleared
//         seeder.populateModels(data, function() {
//             seeder.disconnect();
//         });
//
//     });
// });
//
// const data =[
//   {
//   	model: 'Worker',
//   	documents: [
//   		{
//   			username: 'raquel',
//   			password: '$2a$10$qOibrXReGgRuq5hwqHDB9usXCXAYieBAchmCZOmga3/GO7.Dq6GfC',
//   			services: {
//   				mowing: true,
//   				treetrimming: false,
//   				edging: true,
//   				weedeating: true,
//   				hedgetrimming: false,
//   				fertilizing: true,
//   				aerating: false,
//   				mulching: true,
//   				weeding: false,
//   				planting: true,
//   				grassseeding: true,
//   			},
//   			equipment: {
//   				lawnmower: true,
//   				weedeater: false,
//   				mulchtruck: true,
//   				edger: true,
//   				hedgetrimmer: true,
//   				chainsaw: false,
//   				aerator: true,
//   				seeder: false,
//   			},
//   			area: 'Gafanha da Encarnação',
//   			firstName: 'Raquel',
//   			lastName: 'Sherel',
//   			contactInfo: {
//   				email: 'raquel@email',
//   				phoneNumber: '(666)666-6666',
//   			},
//   			__v: 0,
//   			requests: [],
//   		},
//   	],
//   },
//   {
//     model: 'Request',
//   	documents: [
//   		{
//   			jobname: 'first job',
//   			userId: '5967cae93f9ebb1cc30f37a3',
//   			workerId: '596cfa1c6dbacc72e88b9509',
//   			accepted: false,
//   			services: {
//   				mowing: true,
//   				treetrimming: false,
//   				edging: true,
//   				weedeating: true,
//   				hedgetrimming: false,
//   				fertilizing: true,
//   				aerating: false,
//   				mulching: true,
//   				weeding: false,
//   				planting: true,
//   				grassseeding: true,
//   			},
//   			equipment: {
//   				lawnmower: true,
//   				weedeater: false,
//   				mulchtruck: true,
//   				edger: true,
//   				hedgetrimmer: true,
//   				chainsaw: false,
//   				aerator: true,
//   				seeder: false,
//   			},
//   			address: {
//   				zipcode: '78633',
//   				state: 'Texas',
//   				city: 'Georgetown',
//   				address: '124 Great Frontier dr',
//   			},
//   			time: '1:21pm',
//   			date: 'August 21 2017',
//   			image:
//   				'https://www.glcnow.com/v/vspfiles/assets/images/lawn-care%20worker.jpg',
//   		},
//   	]
//   },
//   {
//   	model: 'User',
//   	documents: [
//   		{
//   			username: 'afylan2',
//   			password: '1L4bPr2',
//   			contactInfo: {
//   				email: 'worker@email.com',
//   				phoneNumber: '(444)444-4444',
//   			},
//   			addresses: [
//   				{
//   					zipcode: '78602',
//   					state: 'Texas',
//   					city: 'Austin',
//   					address: '4702 Hilldale dr.',
//   				},
//   				{
//   					zipcode: '78633',
//   					state: 'Texas',
//   					city: 'Georgetown',
//   					address: '124 Great Frontier dr',
//   				},
//   			],
//   		},
//   	],
//   }
// ]
