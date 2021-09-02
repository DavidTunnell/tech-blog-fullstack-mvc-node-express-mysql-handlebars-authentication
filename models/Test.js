const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Test extends Model {}

Test.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    test_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'test',
});

module.exports = Test;