import Movie from '../../models/Movie.js'
import User from '../../models/User.js'
const Query={
    ping (){
        return 'pong'
    },
    async getMovies(){
        const movies=await Movie.find()
        return movies
    },
    async getUsers(_,{input}){
        const verifyUser=await User.find(input) 
        console.log(verifyUser)
        return verifyUser
    }

}
export default Query