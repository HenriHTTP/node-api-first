
const express = require('express');
const Handlebars = require("express-handlebars");
const Body =  require('body-parser') 
const app = express();
// request data base
const POST = require('./models/POSTS')

//bodyparser

app.use(Body.urlencoded({extended:false})); 
app.use(Body.json())


//handlebars
app.engine('handlebars', Handlebars({
    layoutsDir:'./views/layouts', 
    defaultLayout: "main" 
    }));
app.set( 'view engine','handlebars');


//port
app.listen(3000, () => {
    console.log('Server running on port 3001');
}); 

// main route  impoort  home  from  home.handlebars


app.get('/',(require,response)=>{ 
    POST.findAll({order:[['id', 'DESC']]}).then((posts)=>{
        response.render('home',{posts:posts})
    })
})
// routers 


app.post('/upload', (require,response) =>{
    POST.create({
        TITLE : require.body.title, 
        CONTENT : require.body.content
    }).then( ()=>{
        response.redirect('/')
    }).catch( (error) =>{
        response.send(error)
    })
})
app.get('/drop/:id',(require,response)=>{
    POST.destroy({where:{id: require.params.id}}).then(()=>{
        response.send('sucess')
    }).catch((error)=>{
        response.send(error)
    })
})

app.get('/register', (require,response) =>{
    response.render('form')
}

);