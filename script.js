//Primera función (fecha)
function fecha(){
	var hoy = new Date();                                                 //recoge la fecha
	var dia = hoy.getDay();                                               //variable del dia de la semana 
	var mes = hoy.getMonth();                                             //variable del numero de mes
	
	document.getElementById(dia).style.borderColor = '#FF0000';           //Cambios en el dia de la semana (0 a 6)
	document.getElementById(dia).style.backgroundColor = '#FFFFFF';
	document.getElementById(dia).style.color = '#FF0000';

	if(mes === 11){                                                       //Cambios segun el mes (fondo segun estaciones)(0 a 11)
		document.bgColor = "#2ea9d6";
	}
	if(mes === 0){
		document.bgColor = "#2ea9d6";
	}
	if(mes === 1){
		document.bgColor = "#2ea9d6";
	}
	if(mes === 2){
		document.bgColor = "#38d62e";
	}
	if(mes === 3){
		document.bgColor = "#38d62e";
	}
	if(mes === 4){
		document.bgColor = "#38d62e";
	}
	if(mes === 5){
		document.bgColor = "#e89cff";	
	}
	if(mes === 6){
		document.bgColor = "#e89cff";
	}
	if(mes === 7){
		document.bgColor = "#e89cff";
	}
	if(mes === 8){
		document.bgColor = "#e19f00";
	}
	if(mes === 9){
		document.bgColor = "#e19f00";
	}
	if(mes === 10){
		document.bgColor = "#e19f00";
	}

}


//Segunda función (Cambiar)(Funciona como lista tareas).
function cambiar(asignatura){                                   //esta funcion es la que hace que cuando pulsemos una asignatura se marque (x o o)
	var estado = document.getElementById(asignatura);
	if(estado.innerHTML === "[o]"){                       //si la casilla tiene una [o] al hacer click pasa a ser [x]
		estado.innerHTML = "[x]";
		estado.style.color = '#FFFFFF';
	}else{                                                //si la casilla tiene una [x] al hacer click pasa a ser [o]
		estado.innerHTML = "[o]";
		estado.style.color = '#0F0303';
		}
}

//Función de processing crea el "Canvas" que se utilizará en la media
function setup(){
	createCanvas (1000,10);
	background(255);
}

//Tercera función para la tabla con las medias , recoge los valores que metamos y nos da el resutado de la operación
function media(){
	var a = parseInt(document.getElementById("dato1").value);           //se definen las variables y se les asigna un valor (el del input o la operación correspondiente)
	var b = parseInt(document.getElementById("dato2").value);
	var c = parseInt(document.getElementById("dato3").value);
	var d = parseInt(document.getElementById("dato4").value);
	var e = parseInt(document.getElementById("dato5").value);
	var f = parseInt(document.getElementById("dato6").value);
	var g = parseInt(document.getElementById("dato7").value);
	var h = parseInt(document.getElementById("dato8").value);
	var suma = (a+b+c+d+e+f+g+h);
	var media = suma/8;
	
	background(0);                                                      //Parte de la función que utiliza processing , rellena la barrita segun la media
	for(var i=0; i<media ; i++){
		var j = 10;
		fill(255,0,0);
		rect(0,0,(i+1)*100,10);
	}

	document.getElementById("resultado").innerHTML = media;            //En el <span> con id:"resultado" se escribe lo que vale la variable media
}

//Una funcion por cada asigniatura para que al hacer click en (por ejemplo) Fisica nos destaque todas las horas de Fisica
function fisica(){
	document.getElementById("Fisica").style.borderColor = '#FF0000';
	document.getElementById("Fisica").style.color = '#FF0000';
	document.getElementById("Fisica").style.backgroundColor = '#FFFFFF';
	document.getElementById("Fisica1").style.borderColor = '#FF0000';
	document.getElementById("Fisica1").style.color = '#FF0000';
	document.getElementById("Fisica1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Fisica2").style.borderColor = '#FF0000';
	document.getElementById("Fisica2").style.color = '#FF0000';
	document.getElementById("Fisica2").style.backgroundColor = '#FFFFFF';
	document.getElementById("Fisica3").style.borderColor = '#FF0000';
	document.getElementById("Fisica3").style.color = '#FF0000';
	document.getElementById("Fisica3").style.backgroundColor = '#FFFFFF';
}
function mate(){
	document.getElementById("Mate").style.borderColor = '#FF0000';
	document.getElementById("Mate").style.color = '#FF0000';
	document.getElementById("Mate").style.backgroundColor = '#FFFFFF';
	document.getElementById("Mate1").style.borderColor = '#FF0000';
	document.getElementById("Mate1").style.color = '#FF0000';
	document.getElementById("Mate1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Mate2").style.borderColor = '#FF0000';
	document.getElementById("Mate2").style.color = '#FF0000';
	document.getElementById("Mate2").style.backgroundColor = '#FFFFFF';
	document.getElementById("Mate3").style.borderColor = '#FF0000';
	document.getElementById("Mate3").style.color = '#FF0000';
	document.getElementById("Mate3").style.backgroundColor = '#FFFFFF';
}
function tic(){
	document.getElementById("TIC").style.borderColor = '#FF0000';
	document.getElementById("TIC").style.color = '#FF0000';
	document.getElementById("TIC").style.backgroundColor = '#FFFFFF';
	document.getElementById("TIC1").style.borderColor = '#FF0000';
	document.getElementById("TIC1").style.color = '#FF0000';
	document.getElementById("TIC1").style.backgroundColor = '#FFFFFF';
	document.getElementById("TIC2").style.borderColor = '#FF0000';
	document.getElementById("TIC2").style.color = '#FF0000';
	document.getElementById("TIC2").style.backgroundColor = '#FFFFFF';
}
function ti(){
	document.getElementById("TI").style.borderColor = '#FF0000';
	document.getElementById("TI").style.color = '#FF0000';
	document.getElementById("TI").style.backgroundColor = '#FFFFFF';
	document.getElementById("TI1").style.borderColor = '#FF0000';
	document.getElementById("TI1").style.color = '#FF0000';
	document.getElementById("TI1").style.backgroundColor = '#FFFFFF';
	document.getElementById("TI2").style.borderColor = '#FF0000';
	document.getElementById("TI2").style.color = '#FF0000';
	document.getElementById("TI2").style.backgroundColor = '#FFFFFF';
	document.getElementById("TI3").style.borderColor = '#FF0000';
	document.getElementById("TI3").style.color = '#FF0000';
	document.getElementById("TI3").style.backgroundColor = '#FFFFFF';
}
function lengua(){
	document.getElementById("Lengua").style.borderColor = '#FF0000';
	document.getElementById("Lengua").style.color = '#FF0000';
	document.getElementById("Lengua").style.backgroundColor = '#FFFFFF';
	document.getElementById("Lengua1").style.borderColor = '#FF0000';
	document.getElementById("Lengua1").style.color = '#FF0000';
	document.getElementById("Lengua1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Lengua2").style.borderColor = '#FF0000';
	document.getElementById("Lengua2").style.color = '#FF0000';
	document.getElementById("Lengua2").style.backgroundColor = '#FFFFFF';
	document.getElementById("Lengua3").style.borderColor = '#FF0000';
	document.getElementById("Lengua3").style.color = '#FF0000';
	document.getElementById("Lengua3").style.backgroundColor = '#FFFFFF';
}
function historia(){
	document.getElementById("Historia").style.borderColor = '#FF0000';
	document.getElementById("Historia").style.color = '#FF0000';
	document.getElementById("Historia").style.backgroundColor = '#FFFFFF';
	document.getElementById("Historia1").style.borderColor = '#FF0000';
	document.getElementById("Historia1").style.color = '#FF0000';
	document.getElementById("Historia1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Historia2").style.borderColor = '#FF0000';
	document.getElementById("Historia2").style.color = '#FF0000';
	document.getElementById("Historia2").style.backgroundColor = '#FFFFFF';
	document.getElementById("Historia3").style.borderColor = '#FF0000';
	document.getElementById("Historia3").style.color = '#FF0000';
	document.getElementById("Historia3").style.backgroundColor = '#FFFFFF';
}
function dibujo(){
	document.getElementById("Dibujo").style.borderColor = '#FF0000';
	document.getElementById("Dibujo").style.color = '#FF0000';
	document.getElementById("Dibujo").style.backgroundColor = '#FFFFFF';
	document.getElementById("Dibujo1").style.borderColor = '#FF0000';
	document.getElementById("Dibujo1").style.color = '#FF0000';
	document.getElementById("Dibujo1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Dibujo2").style.borderColor = '#FF0000';
	document.getElementById("Dibujo2").style.color = '#FF0000';
	document.getElementById("Dibujo2").style.backgroundColor = '#FFFFFF';
	document.getElementById("Dibujo3").style.borderColor = '#FF0000';
	document.getElementById("Dibujo3").style.color = '#FF0000';
	document.getElementById("Dibujo3").style.backgroundColor = '#FFFFFF';
}
function ingles(){
	document.getElementById("Ingles").style.borderColor = '#FF0000';
	document.getElementById("Ingles").style.color = '#FF0000';
	document.getElementById("Ingles").style.backgroundColor = '#FFFFFF';
	document.getElementById("Ingles1").style.borderColor = '#FF0000';
	document.getElementById("Ingles1").style.color = '#FF0000';
	document.getElementById("Ingles1").style.backgroundColor = '#FFFFFF';
	document.getElementById("Ingles2").style.borderColor = '#FF0000';
	document.getElementById("Ingles2").style.color = '#FF0000';
	document.getElementById("Ingles2").style.backgroundColor = '#FFFFFF';
}