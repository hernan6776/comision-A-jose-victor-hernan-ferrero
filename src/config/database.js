import { Sequelize } from "sequelize";


const sequelize = new Sequelize('db_task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const startDb = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}