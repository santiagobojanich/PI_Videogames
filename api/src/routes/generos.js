const Router  = require('express');
const axios = require ('axios');
const {Videogame,Gender} = require ('../db');
const functions = require ('./funciones')
const router = Router()

router.get('/', async function (req,res){
  let genresA =  await axios.get('https://api.rawg.io/api/genres?key=02338d92bdba49b4ad4d652a4a4d842e')
  genresA = genresA.data.results
  let genresB = genresA.map(gen => gen.name)
  console.log(genresB)  
  genresB.forEach( async genre => {
  await Gender.findOrCreate({ 
  where: {name: genre}
  })
  })
  let showGenres = await Gender.findAll()
  res.send(showGenres)
  
  //  Agarrandolos desde los 100 juegos del home 
  //   let genresA = await functions.ALL()
  //   let genresDb = genresA.map(game => game.genres)
  //   console.log(genresDb)
  //   let DefGenres = genresDb.join().split(',')
  //   console.log(DefGenres)
  //     let def = Array.from(new Set(DefGenres))  
  //  console.log(def) 
  //  def.forEach( async genre => {
  //       await Gender.findOrCreate({
  //         where: {name: genre.toLowerCase().charAt(0).toUpperCase() + genre.slice(1)}
  //       })
  //   })   
  //   console.log(def)
  //   let showGenres = await Gender.findAll()
  //   res.send(showGenres)
})



module.exports = router