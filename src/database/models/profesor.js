module.exports = function (sequelize, DataTypes) {
    let alias = "Profesor";
  
    let col = {
      ID_Profesor: {
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
      tableName: "profesor",
      timestamps: false,
    };
  
    let Profesor = sequelize.define(alias, col, config);
  
    return Profesor;
  };