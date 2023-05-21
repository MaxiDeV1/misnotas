module.exports = function (sequelize, DataTypes) {
  let alias = "Materia";

  let col = {
    ID_Materia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    id_profesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "materias",
    timestamps: false,
  };

  let Materia = sequelize.define(alias, col, config);

  // Definir la relación con el modelo Profesor
  Materia.associate = function (models) {
    Materia.belongsTo(models.Profesor, {
      as: "profesor",
      foreignKey: "id_profesor",
    });

    Materia.hasOne(models.Nota, {
      foreignKey: "ID_Materia",
      as: "nota",
    });
  };

  return Materia;
};
