const axios = require ('axios');
const {Videogame,Gender} = require ('../db');
 
module.exports = {
API : async function allGames (){
    const allGames1 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=1')
    const allGames2 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=2')
    const allGames3 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=3')
    const allGames4 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=4')
    const allGames5 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=5')
    let DefAllGames = await Promise.all([allGames1,allGames2,allGames3,allGames4,allGames5])   
    DefAllGames = DefAllGames.map(el=> el.data.results)
    DefAllGames = [...DefAllGames[0], ...DefAllGames[1],...DefAllGames[2],...DefAllGames[3],...DefAllGames[4]]
    let games =  DefAllGames.map((game) => {
        return {
            id: game.id,
            name:  game.name,
            image: game.background_image,
            genres: game.genres.map(gen => gen.name),
            rating: game.rating
            // description: game.description,
            // rating: game.rating,
            // platforms: game.platforms.map(plat => plat.platform.name)

         }})
         return games
 },

 DB :async function gamesFromDB (){
    let allDB = await Videogame.findAll({
        include:{
            model: Gender,
            attributes:['name'],
            throug: {
                attributes: [],
            }
          }
    })
     let DefAllDB = allDB.map((game) => {
       return{
           id: game.id, 
           name: game.name ,
           image: game.image,
           genres: game.Genders.map(gen => gen.name), 
           description: game.description,
           rating: game.rating,
          }
     })

    return DefAllDB
  },

 ALL: async function (){
    let api = await this.API()
    let db =  await  this.DB()  
    let total = api.concat(db)
    return total
  }
}