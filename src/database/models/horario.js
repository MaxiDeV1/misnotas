module.exports = function (sequelize, DataTypes) {
    let alias = "Horario";
  
    let col = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ID_Horario: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    };
  
    let config = {
      tableName: "horarios",
      timestamps: false,
    };
  
    let Horario = sequelize.define(alias, col, config);
  
    // Definir las relaciones con otros modelos (si existen)
  
    return Horario;
  };
  