var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var routes=require('./routes/router');
var path=require('path');
var methodOverride=require('method-override');
var compression=require('compression');
// var formidable2=require('formidable');


// var formidable=require('express-formidable');

var page=path.join(__dirname,'views','index.html');




app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




app.use(compression());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname,"public")));
app.set(path.join(__dirname,"views"));
app.set("view engine","jade");

// app.use(formidable({keepExtensions:true,
//  encoding: 'utf-8',
//   uploadDir: 'C:/Users/najera/Documents/Programming/proyectos/ApiRegistro/public/imagen',
//   multiples: true
// }));


app.get('/',(req,res,next)=>{

// res.sendFile(page);
res.render('index2');

});

app.use("/api",routes);


module.exports=app;