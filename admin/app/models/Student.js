'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('Student', {
    Name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'Student',
    
    timestamps: false,
    
  });

  return Model;
};

