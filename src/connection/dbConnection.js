import Sequelize from 'sequelize'

const sequelize = new Sequelize('taina', 'root', '', {
    dialect: 'mysql',
    define: {
        timestamps: true
    }
})

export default sequelize