var path=require('path');
var mysql=require('mysql');
var config=require('../config/config');
// var page=path.join(__dirname,'../','views','index.html');
var fs=require('fs');
var qr = require('qr-image');  

module.exports={
getAlumnos:function(req,res,next){
console.log("Get Alumnos!");

var db=mysql.createConnection(config.configDB);
db.connect();

db.query("SELECT * FROM alumno",function(err,rows,fields){
if(err) throw err;
var datos=rows;


db.end();



res.status(200).send({query:datos});


});



},

setAlumno:function(req,res,next){
var mat=req.body.matricula;
var image=req.file.filename;
var dirMat=path.join(__dirname,'../','public','imagen','QR',mat);


var db=mysql.createConnection(config.configDB);
db.connect();
////////////////////////////////////////////////////////////

var ext="."+req.file.filename.split(".").pop();


var datos={
matricula:req.body.matricula,
nombre:req.body.nombre,
apellidos:req.body.apellidos,
semestre:req.body.semestre,
grupo:req.body.grupo,
img:req.file.filename,
ext:ext
};

//////////////////////////////////////////////////////////////
db.query("INSERT INTO alumno SET ?",datos,function(err,rows,fields){

if(err){
	throw err;
	db.end();
}

db.end();


var code = qr.image(mat, { type: "jpeg",size:10,margin:1 });  
var output = fs.createWriteStream(dirMat+".jpeg");
code.pipe(output);  


// res.status(200).send({query:"Los datos se han guardado correctamente!"});
// res.redirect('/');//prueba
res.render('viewqr',{matricula:mat});


});

///////////////////////////////////////////
},



getAlumno:function(req,res,next){
var matricula=req.params.id;

var db=mysql.createConnection(config.configDB);
db.connect();

db.query("SELECT * FROM alumno WHERE matricula=?",matricula,function(err,rows,fields){
var data=rows;
if(err){
	throw err;
	db.end();
}

db.end();

if(data.length>0){

console.log("Nombre: "+data[0].nombre);
res.status(200).send({alumno:data});	

}else{
console.log(data);
res.status(500).send("");
}

});


},

updateAlumno:function(req,res,next){

res.status(200).send({hi:"Hola controllerAlumno.updateAlumno: "+req.params.id});

},

deleteAlumno:function(req,res,next){
res.status(200).send({hi:"Hola controllerAlumno.deleteAlumno: "+req.params.id});


}


}