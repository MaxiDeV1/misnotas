module.exports = function (sequelize, DataTypes) {
    let alias = "Materias";
  
    let col = {
      ID_Materia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING,
      },
    };
  
    let config = {
      tableName: "materias",
      timestamps: false,
    };
  
    let Materias = sequelize.define(alias, col, config);
  
    return Materias;
  };
  