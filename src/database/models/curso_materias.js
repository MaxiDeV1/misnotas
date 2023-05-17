module.exports = function (sequelize, DataTypes) {
    let alias = "CursoMaterias";
  
    let col = {
      ID_Curso: {
        type: DataTypes.INTEGER,
      },
      ID_Materia: {
        type: DataTypes.INTEGER,
      },
    };
  
    let config = {
      tableName: "curso_materias",
      timestamps: false,
    };
  
    let CursoMaterias = sequelize.define(alias, col, config);
  
    return CursoMaterias;
  };
  