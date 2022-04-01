const Router  = require('express');
const axios = require ('axios');
const {Videogame,Gender} = require ('../db');
const functions = require ('./funciones')
 


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
      let result =  games.filter(game=> game.name.toLowerCase().includes(name.toLowerCase())) //contains deprecado para strings
      if(result.length >15){
        let newResult =  result.slice(0,15)
        return res.send(newResult)  
      }
      if(result.length > 0) {
        res.send(result)
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
