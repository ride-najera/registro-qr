var path=require('path');
var multer=require('multer');

var route_image=path.join(__dirname,'../',"public","imagen","alumno");
var opcionesMulter=multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null,route_image);
  },
  filename:function (req,file,cb) {
var ext=file.originalname.split('.').pop();

    cb(null,Date.now()+req.body.matricula+"."+ext);
  }
});
// req.body.idr
// file.originalname
var upload=multer({storage:opcionesMulter});

module.exports=upload;