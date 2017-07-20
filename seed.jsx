import mongoose from 'mongoose'
import User from './src/server/db/models/user.js'
import Worker from './src/server/db/models/worker.js'
import Request from './src/server/db/models/request.js'
import user from './src/server/db/data/user.jsx'
import worker from './src/server/db/data/worker.jsx'
import request from './src/server/db/data/request.jsx'

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
