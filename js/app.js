window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(){
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var genero = document.getElementById("sexo").value;

		var datos = new Persona(nombre, edad, genero);
		var saludo = document.getElementById("resultado");
		saludo.innerHTML=datos.presentacion();
	});
	function Persona(nombre, edad, genero){
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
		this.mayorDeEdad = (this.edad >= 18);
		this.presentacion = function () {
			return "hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad";
		};
	}
});