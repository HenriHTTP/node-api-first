
const Sequelize = require ('sequelize'); 

const sequelize = new Sequelize ('posts','root','123', { 
    host: '127.0.1', 
    dialect: 'mysql'
}); 

const POST = sequelize.define('POST',{
    TITLE:{ 
        type:Sequelize.STRING
    }, 
    CONTENT: { 
        type:Sequelize.TEXT
    }
    
})

POST.sync(
    {force:true}
)

const USER =   sequelize.define( 
    "USERS",{
        USERNAME:{ 
            type: Sequelize.STRING
        },
        NAME:{ 
            type: Sequelize.STRING
        },
        SEX:{ 
            type:Sequelize.BOOLEAN
        },
        EMAIL: { 
            type:Sequelize.STRING
        }
    }
)

USER.sync(
    {force:true}
)
