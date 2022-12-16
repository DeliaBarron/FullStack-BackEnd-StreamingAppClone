import dotenv from 'dotenv'
dotenv.config()

export default{
    database:{
       uri:process.env.ATLAS_URI 
    }
}