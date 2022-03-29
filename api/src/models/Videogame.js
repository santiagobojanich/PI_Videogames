const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    //  id:{
    //   type:DataTypes.STRING,
    //   primaryKey:true,
    //   // set() {
    //   //  this.setDataValue('id', id = `DB${id}`)
    //   //  }
    //  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     description: {
       type: DataTypes.TEXT,
       allowNull: false,
     },
     released: {
       type: DataTypes.STRING,
     },
     rating: {
       type: DataTypes.FLOAT, 
     }, 
     plataforms: {
       type: DataTypes.STRING,
       allowNull: false
     },
  }); 
};
