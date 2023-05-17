module.exports = function (sequelize, DataTypes) {
    let alias = "Curso";
  
    let col = {
      ID_Curso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Anio: {
        type: DataTypes.INTEGER,
      },
      Division: {
        type: DataTypes.STRING,
      },
      ID_Preceptor: {
        type: DataTypes.INTEGER,
      },
      Modalidad: {
        type: DataTypes.STRING,
      },
      Turno: {
        type: DataTypes.STRING,
      },
      Cantidad_Alumnos: {
        type: DataTypes.INTEGER,
      },
    };
  
    let config = {
      tableName: "curso",
      timestamps: false,
    };
  
    let Curso = sequelize.define(alias, col, config);
  
    return Curso;
  };
  