module.exports = function (sequelize, DataTypes) {
  let alias = "Recreos";

  let col = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    horario_inicio: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    horario_fin: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  };

  let config = {
    tableName: "recreos",
    timestamps: false,
  };

  let Recreos = sequelize.define(alias, col, config);

  // Definir las relaciones con otros modelos (si existen)

  return Recreos;
};
module.exports = function (sequelize, DataTypes) {
  let alias = "Recreos";

  let col = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    horario_inicio: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    horario_fin: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  };

  let config = {
    tableName: "recreos",
    timestamps: false,
  };

  let Recreos = sequelize.define(alias, col, config);

  // Definir las relaciones con otros modelos (si existen)

  return Recreos;
};
