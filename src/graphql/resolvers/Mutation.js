import Movie from "../../models/Movie.js"
const Mutation={
  async createMovie(_, {input}){
    const movie=await Movie.create(input)
    return movie
  },
  async updateMovie(_,{likes,_id}){
    return await Movie.findByIdAndUpdate(
        _id,
        likes,
        {new:true}
      )
     
  }
}
export default Mutation