module.exports = function (sequelize, DataTypes) {
    let alias = "CursoHorario";
  
    let col = {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      curso_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      horario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    };
  
    let config = {
      tableName: "curso_horario",
      timestamps: false,
      primaryKey: false,
    };
    
    let CursoHorario = sequelize.define(alias, col, config);
  
    // Definir las relaciones con otros modelos (si existen)
    CursoHorario.associate = function (models) {
      CursoHorario.belongsTo(models.Curso, {
        foreignKey: "curso_id",
      });
      CursoHorario.belongsTo(models.Horario, {
        foreignKey: "horario_id",
      });
    };
  
    return CursoHorario;
  };
  