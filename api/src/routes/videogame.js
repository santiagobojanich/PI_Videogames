const Router = require ('express')
const axios = require ('axios');
const {Videogame,Gender} = require ('../db');
const router = Router()
const functions = require ('./funciones.js')

let id = 800000
router.post('/', async function (req,res){
   const {name,description,released,rating,plataforms,image,genres} = req.body
   let post = await Videogame.create({
       id: id ,
       name: name,
       description: description,
       released:released,
       rating: rating,
       plataforms: plataforms || ['missing platforms'], 
       image: image,
      });
      ++id
      
      let GendersDisp = await Gender.findAll({
        where: {name: genres}
      })
      post.addGender(GendersDisp) 
      res.send(`${name} ha sido agregado con exito`,)
    })

router.get('/:id', async function (req,res){
    let {id}= req.params
    
   if(id < 800000){ 
    let gameApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=02338d92bdba49b4ad4d652a4a4d842e`)
    gameApi = gameApi.data
   let game2= {
         "name": gameApi.name,
         "image": gameApi.background_image,
         "genres": gameApi.genres.map(gen => gen.name), 
         "description": gameApi.description_raw,
         "rating": gameApi.rating,
         "platforms": gameApi.platforms.map(plat => plat.platform.name)    
     }
     //console.log(game2)
     res.send(game2)
    }  
  if (id >= 800000){
    let gameDB = await functions.DB()
    console.log(gameDB)
    let game2 = gameDB.filter(game => game.id == id)
    let game3 = game2.map(game => {
      return{
        name: game.name,
        image: game.image,
        genres: game.genres,
        description: game.description,
        rating: game.rating,
        platforms: game.plataform
      }
    }) 
    let game4 = game3[0]
    res.send(game4)
  }
  })
      module.exports = router