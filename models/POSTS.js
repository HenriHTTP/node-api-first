const  db =  require ("./db")

const  POST = db.sequelize.define('POST',{
    TITLE:{ 
        type:db.Sequelize.STRING
    }, 
    CONTENT: { 
        type:db.Sequelize.TEXT
    }
    
})


module.exports = POST