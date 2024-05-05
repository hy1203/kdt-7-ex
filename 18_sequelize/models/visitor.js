//visitor 체이블 정의
const visitor = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //NOT NULL
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", //실제 DB테이블
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};
module.exports = visitor;
