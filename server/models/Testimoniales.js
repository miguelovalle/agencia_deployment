const Sequelize = require('sequelize');
const db=require('../config/database');

const Testimoniales=db.define('Testimoniales', {
    nombre : {
        type: Sequelize.STRING
    },
    correo : {
        type: Sequelize.STRING
    },
    mensaje : {
        type: Sequelize.STRING
    }
});
module.exports=Testimoniales;

