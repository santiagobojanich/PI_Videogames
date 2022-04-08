const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true, 
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      //   set(value) { 
      //   this.setDataValue('name', value + 'DB')
      // }
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
    image:{
      type: DataTypes.STRING,
    }
  }); 
};
