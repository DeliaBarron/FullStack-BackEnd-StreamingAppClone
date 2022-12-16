import mongoose from 'mongoose'
import config from './config.js'

export async function connect(){
    try {
        await mongoose.connect(config.database.uri,{
        useNewUrlParser : true,
        useUnifiedTopology:true
    })
    console.log('Database Connected!')
    } catch (error) {
        return console.log(error)
    }
}
