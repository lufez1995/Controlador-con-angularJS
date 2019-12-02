angular.module("MyFirstApp",[]).controller("FirstController",["$scope",function(m)
{
	m.nombre="Felipe";
	m.nuevoComentario={};
	m.comentarios=[
		{
			comentario: "Buen Ejercicio",
			username: "Pragma"
		},
		{
			comentario:"Muy mal",
			username:"Otro"
		}
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario={};
	}
}]);