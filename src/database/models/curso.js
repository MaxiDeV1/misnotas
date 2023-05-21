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

  // Definir la relación con el modelo Alumno
  Curso.associate = function (models) {
    Curso.hasMany(models.Alumno, {
      as: "alumnos",
      foreignKey: "ID_Curso",
    });
  };
    // Definir la relación con el modelo Preceptor
    Curso.associate = function (models) {
      Curso.belongsTo(models.Preceptor, {
        as: "preceptor",
        foreignKey: "ID_Preceptor",
      });
    };

  return Curso;
};
