module.exports = function (sequelize, DataTypes) {
  let alias = "Alumno";

  let col = {
    ID_Alumno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Apellido: {
      type: DataTypes.STRING,
    },
    Edad: {
      type: DataTypes.INTEGER,
    },
    ID_Curso: {
      type: DataTypes.INTEGER,
    },
    Ciclo_Lectivo: {
      type: DataTypes.STRING,
    },
    Orientacion: {
      type: DataTypes.STRING,
    },
  };

  let config = {
    tableName: "alumno",
    timestamps: false,
  };

  let Alumno = sequelize.define(alias, col, config);

  // Definir la relación con el modelo Curso
  Alumno.associate = function (models) {
    Alumno.belongsTo(models.Curso, {
      as: "curso",
      foreignKey: "ID_Curso",
    });
  };

  return Alumno;
};
