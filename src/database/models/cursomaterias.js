module.exports = function (sequelize, DataTypes) {
  let alias = "CursoMaterias";

  let col = {
    ID_Curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ID_Materia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  let config = {
    tableName: "curso_materias",
    timestamps: false,
  };

  let CursoMaterias = sequelize.define(alias, col, config);

  // Definir las relaciones con otros modelos (si existen)
  CursoMaterias.associate = function (models) {
    CursoMaterias.belongsTo(models.Curso, {
      foreignKey: "ID_Curso",
    });
    CursoMaterias.belongsTo(models.Materia, {
      foreignKey: "ID_Materia",
    });
  };

  return CursoMaterias;
};
