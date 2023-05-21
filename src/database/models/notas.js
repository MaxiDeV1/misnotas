module.exports = function (sequelize, DataTypes) {
  let alias = "Nota";

  let col = {
    ID_Nota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_Alumno: {
      type: DataTypes.INTEGER,
    },
    ID_Materia: {
      type: DataTypes.INTEGER,
    },
    Nota: {
      type: DataTypes.DECIMAL(4, 2),
    },
  };

  let config = {
    tableName: "notas",
    timestamps: false,
  };

  let Nota = sequelize.define(alias, col, config);

  Nota.associate = function (models) {
    Nota.belongsTo(models.Materia, {
      foreignKey: "ID_Materia",
      as: "materia",
    });
  };

  return Nota;
};
