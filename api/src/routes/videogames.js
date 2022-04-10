const Router  = require('express');
const axios = require ('axios');
const {Videogame,Gender} = require ('../db');
const functions = require ('./funciones');
const { API } = require('./funciones');
 


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
// router.get('/', async function (req,res){
//  try{
//     let showall = await allGames()
//      res.send(showall)
//     }
//     catch(e){
//         res.status(400).send('que paso')
//     }
// }); 

router.get('/', async function (req,res){
  try{  
    let name = req.query.name
    let games = await functions.ALL()
    if(name){
      let api = await axios.get(`https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&search=${name}`)
      api = api.data.results
      let result=  api.map(game=> {
        return {
          id: game.id, 
          name: game.name,
          image: game.background_image,
          genres: game.genres.map(gen => gen.name), 
          rating: game.rating
        }
        
      }) 
      let db = await functions.DB()
      let result2 = db.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))
      
      let result3 = result2.concat(result)
      
      if(result3.length >15){
        let newResult =  result3.slice(0,15)
        return res.send(newResult)  
      }
      if(result3.length > 0) {
        res.send(result3)
      } else{
        res.status(400).send('no hubo resultados')
      } 
    } else{
      res.send(games)
    }
}
catch(e){
    res.status(404).send(e)
}})

    


module.exports = router;
