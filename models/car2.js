'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car2 = sequelize.define('Car2', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Car2.associate = function(models) {
    // associations can be defined here
  };
  return Car2;
};