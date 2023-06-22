module.exports = function (sequelize, DataTypes) {
  let alias = "MateriaHorario";

  let col = {
    materia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    horario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  let config = {
    tableName: "materia_horario",
    timestamps: false,
  };

  let MateriaHorario = sequelize.define(alias, col, config);

  // Definir las relaciones con otros modelos (si existen)
  MateriaHorario.associate = function (models) {
    MateriaHorario.belongsTo(models.Materia, {
      foreignKey: "materia_id",
    });
    MateriaHorario.belongsTo(models.Horario, {
      foreignKey: "horario_id",
    });
  };

  return MateriaHorario;
};
