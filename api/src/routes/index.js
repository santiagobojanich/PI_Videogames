const { Router } = require('express');
const axios = require ('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function (req,res){
 try{
    let showall = await allGames()
     res.send(showall)
    }
catch(e){
    res.status(400).send('que paso')
}
}); 



async function allGames (){
   const allGames1 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=1')
   const allGames2 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=2')
   const allGames3 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=3')
   const allGames4 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=4')
   const allGames5 =  axios.get('https://api.rawg.io/api/games?key=02338d92bdba49b4ad4d652a4a4d842e&page=5')
   let DefAllGames = await Promise.all([allGames1,allGames2,allGames3,allGames4,allGames5])   
   
   DefAllGames = DefAllGames.map(el=> el.data.results)
   DefAllGames = [...DefAllGames[0], ...DefAllGames[1],...DefAllGames[2],...DefAllGames[3],...DefAllGames[4]]
   let games =  DefAllGames.map((el) => {
       return {
           name: el.name,
           image:el.background_image,
           genres: el.genres,
           
        }})
        return games
} 



module.exports = router;
