import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost/yardly_dev')
mongoose.connection.on('open', function(){
    mongoose.connection.db.dropDatabase(function(err, result){
        // done()
        if(!err) {
          mongoose.connection.db.close()

        }
    })
})
