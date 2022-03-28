const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Gender', {
       
      name:{
          type: DataTypes.STRING
      }
    
    });
};
