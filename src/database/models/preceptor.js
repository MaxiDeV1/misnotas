module.exports = function (sequelize, DataTypes) {
    let alias = "Preceptor";
  
    let col = {
      ID_Preceptor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING,
      },
      Apellido: {
        type: DataTypes.STRING,
      },
    };
  
    let config = {
      tableName: "preceptor",
      timestamps: false,
    };
  
    let Preceptor = sequelize.define(alias, col, config);
  
    return Preceptor;
  };
  