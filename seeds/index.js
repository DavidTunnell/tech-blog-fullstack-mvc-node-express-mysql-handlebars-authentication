const sequelize = require('../config/connection');
const Test = require('../models/Test');
const testData = require('./test-seeds.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await Test.bulkCreate(testData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();