import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:senha123@localhost:3306/pitu');

export default sequelize;
