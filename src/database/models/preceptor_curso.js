module.exports = function (sequelize, DataTypes) {
    let alias = "PreceptorCurso";
  
    let col = {
      ID_Preceptor_Curso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ID_Preceptor: {
        type: DataTypes.INTEGER,
      },
      ID_Curso: {
        type: DataTypes.INTEGER,
      },
    };
  
    let config = {
      tableName: "preceptor_curso",
      timestamps: false,
    };
  
    let PreceptorCurso = sequelize.define(alias, col, config);
  
    return PreceptorCurso;
  };
  