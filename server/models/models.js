const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Workers = sequelize.define( 'workers', {
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    name:{type: DataTypes.STRING,},
    graphic:{type: DataTypes.INTEGER},
    position:{type: DataTypes.STRING},
    quality:{type: DataTypes.INTEGER},
})


const new_task = sequelize.define( 'new_task', {
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    place:{type: DataTypes.STRING,},
    number:{type: DataTypes.INTEGER,},
    time:{type: DataTypes.INTEGER},
    problem:{type: DataTypes.STRING},
    comment:{type: DataTypes.STRING},
    status:{type: DataTypes.STRING},
})


const outdoor_blocks = sequelize.define( 'outdoor_blocks', {
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    place:{type: DataTypes.STRING,},
    number:{type: DataTypes.INTEGER,},
    gaz:{type: DataTypes.INTEGER},
    repair:{type: DataTypes.STRING},
    help:{type: DataTypes.STRING},
})


const object = sequelize.define( 'object', {
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    place:{type: DataTypes.STRING},
    admin:{type: DataTypes.STRING,},
    phone :{type: DataTypes.INTEGER},
    type_of_system:{type: DataTypes.STRING},
    worked_place:{type: DataTypes.STRING},
})


const completed_task = sequelize.define( 'completed_task', {
    id:{type: DataTypes.INTEGER,primaryKey:true, autoIncrement: true},
    place :{type: DataTypes.STRING,},
    number :{type: DataTypes.INTEGER,},
    time :{type: DataTypes.INTEGER},
    problem:{type: DataTypes.STRING},
    comment:{type: DataTypes.STRING},
    workers:{type: DataTypes.STRING},
})

// настроить зависимости между базами 



module.exports = {
    completed_task,
    object,
    outdoor_blocks,
    new_task,
    Workers
}