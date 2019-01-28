var app=require('./app');
var config=require('./config/config');

app.listen(config.port,function(){
	console.log("App corriendo en el puerto: "+config.port+"...");
});
