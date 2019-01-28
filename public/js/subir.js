$(document).ready(function(){

	var	urlBase64;
var cadena;
var cadena2;

// document.getElementById('sending').addEventListener('click',function(){

$('#form-datoss').on("submit",function(e){
e.preventDefault();

// var ctimg=$("#img")[0].files[0];
///////////////////////////////////////

      var formu=new FormData($("#form-datos")[0]);
      $.ajax({
        url: "/api/alumno",
        type: 'POST',
        data: formu,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend:function () {
console.log("subiendo");
        },
        success:function(data){
alertify.alert(data.query);

        },
        error:function () {
          console.log('error');
        }
       });
    
///////////////////////////////////

});



// $('#send').click(function(){
// //alert("Nombre: "+document.getElementById('nombre').value);
// var datos={
// matricula:document.getElementById('matricula').value,
// nombre:document.getElementById('nombre').value,
// apellidos:document.getElementById('apellidos').value,
// semestre:document.getElementById('semestre').value,
// grupo:document.getElementById('grupo').value,
// img:cadena
// };

// console.log(datos);

// $.ajax({
// url: '/api/alumno',
// data:datos,
// dataType:'json',
// method:'POST',
// encode:true,
// success:function(data){
// // window.location='/';
// alertify.alert(data.query);

// }

// });



// });





if( ! window.FileReader ) {
	return; // No soportado
alert("FileReader no soportado!")
}
var input = document.querySelector('#img');
var image=document.getElementById("image");

input.addEventListener('change', function(e){
	var archivo = input.files[0];
	var	reader = new FileReader();


	reader.onload = function(){
		urlBase64 = reader.result;
		 cadena=urlBase64.split(",").pop();
            cadena2=urlBase64.split(",").shift();
// 		console.log(cadena);
// console.log(cadena2);

				image.src=urlBase64;
	}
   reader.readAsDataURL(archivo);

}, false);



});


// data:image/png;base64,
// data:image/jpeg;base64,
// data:image/gif;base64,
		// var cadena=urlBase64.split(";").shift();
		// cadena.substring(11)