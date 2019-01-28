var express=require('express');
var router=express.Router();
var controllerAlumno=require('../controllers/controllerAlumno');
var controllerAsistencia=require('../controllers/controllerAsistencia');
var upload=require('../middlwares/Uploader');

router.route("/alumno")
.get(controllerAlumno.getAlumnos)
.post(upload.single("img"),controllerAlumno.setAlumno);

router.route('/alumno/:id')
.get(controllerAlumno.getAlumno)
.put(controllerAlumno.updateAlumno)
.delete(controllerAlumno.deleteAlumno);

router.route("/asistencia")
.get(controllerAsistencia.getAsistencias)
.post(controllerAsistencia.setAsistencia);

module.exports=router;