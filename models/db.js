const Sequelize = require ('sequelize'); 

// database  acesss

const sequelize = new Sequelize ('posts','root','123', { 
    host: '127.0.1', 
    dialect: 'mysql' //  lang
}); 

module.exports = { 
    sequelize : sequelize,  // lib 
    Sequelize : Sequelize  // local  data base 
}
