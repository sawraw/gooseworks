'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('styleGuide', {

  name: {
    type: DataTypes.STRING, 
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },


  backdrop: {
    type: DataTypes.STRING,
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },


  captions: {
    type: DataTypes.STRING,
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },


  title: {
    type: DataTypes.STRING,
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  }



});
