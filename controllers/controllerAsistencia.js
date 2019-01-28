var mysql=require('mysql');
var config=require('../config/config');

module.exports={
setAsistencia:function(req,res,next){
var datos={
matricula:req.body.matricula,
nombre:req.body.nombre,
apellidos:req.body.apellidos
};

// var ahora=new Date();

// var year=ahora.getFullYear();
// var month=((ahora.getMonth()+1)<10 ? ('0'+(ahora.getMonth()+1)): (ahora.getMonth()+1) );
// var day=((ahora.getDate())<10 ? ('0'+(ahora.getDate())): (ahora.getDate()) );

// var act=`${year} : ${month} : ${day}`;
var db=mysql.createConnection(config.configDB);

db.connect();

db.query("INSERT INTO asistencia SET ?",datos,function(err,rows,fields){
if(err){
	throw err; 
	db.end(); 
}

res.status(200).send({msj:"Asistencia Registrada"});

db.end();
});

},
getAsistencias:function(req,res,next){
res.status(200).send({hi:"Peticion Get Asistencias"});

}

}