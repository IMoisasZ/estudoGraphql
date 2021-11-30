import Sequelize from 'sequelize'
import dbConnection from '../connection/dbConnection.js'

const Cliente = dbConnection.define('cliente', {
    cliente_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_completo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
}, { tableName: 'cliente' })

export default Cliente