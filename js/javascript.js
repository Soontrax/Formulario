var object;
function home(){
	Eliminar();
	document.getElementById("ins").onclick = function(){
		Eliminar();
		mostrarInstrucciones();
	}
	document.getElementById("exam").onclick = function(){
		Eliminar();
		mostrarExamen();
	}
	document.getElementById("acer").onclick = function(){
		Eliminar();
		mostrarAcercade();
	}
}

function formulario(){
	/*fichero json que está en el servidor rawgit*/
	var url="https://rawgit.com/Soontrax/Formulario/master/formulario.json";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			/*función personalizada que gestiona la respuesta a la petición de fichero*/
			object = JSON.parse(this.responseText);
			gestionarJson(object); 
		}
	};
		xhttp.open("GET", url, true); //url del fichero
		xhttp.send();
	}

	/*Funcion que oculta todos los elemntos al cargar la página.*/
	function Eliminar(){
		document.getElementsByClassName('indices')[0].style.display="none";
		document.getElementsByClassName('indices')[1].style.display="none";
		document.getElementsByClassName('indices')[2].style.display="none";
		document.getElementById("ins").style.textDecoration="none";
		document.getElementById("exam").style.textDecoration="none";
		document.getElementById("acer").style.textDecoration="none";
	}

	/*Funcion para mostra las Instrucciones.*/
	function mostrarInstrucciones(){
		document.getElementById("Instrucciones").style.display="block";
	}

	/*Funcion para mostra el examen*/
	function mostrarExamen(){
		document.getElementById("Examen").style.display="block";
	}

	/*Funcion para mostra acercade*/
	function mostrarAcercade(){
		document.getElementById("Acerde").style.display="block";
	}


	/*función personalizada que gestiona la respuesta a la petición de fichero*/
	function gestionarJson(dadesJson){
		document.getElementById("preg1").innerHTML = object.question[0].title;
		document.getElementById("preg2").innerHTML = object.question[1].title;
		document.getElementById("preg3").innerHTML = object.question[2].title;
		document.getElementById("preg4").innerHTML = object.question[3].title;
		document.getElementById("preg5").innerHTML = object.question[4].title;
		document.getElementById("preg6").innerHTML = object.question[5].title;
		document.getElementById("preg7").innerHTML = object.question[6].title;
		document.getElementById("preg8").innerHTML = object.question[7].title;
		document.getElementById("preg9").innerHTML = object.question[8].title;
		document.getElementById("preg10").innerHTML = object.question[9].title;


		/*Declaración de las variables para que haga referencia cada una de las respuestas*/
		/*--------------------------------------------------------------------------------------*/
		/*Pregunta3*/
		var nopt = object.question[2].option.length;
		var seleccion = document.getElementsByTagName("select")[0];
		/*----------------------------------------------------------------------------------------*/

		/*Pregunta4*/
		var nopt1 = object.question[3].option.length;
		var seleccion1 = document.getElementsByTagName("select")[1];
		/*----------------------------------------------------------------------------------------*/

		/*Pregunta5*/
		var nopt2 = object.question[4].option.length;
		var seleccion2 = document.getElementsByTagName("select")[2];
		/*------------------------------------------------------------------------------------------*/

		/*Pregunta6*/
		var nopt3 = object.question[5].option.length;
		var seleccion3 = document.getElementsByTagName("select")[3];
		/*-------------------------------------------------------------------------------------------*/

		/*Pregunta7 Checkbox*/
		var nopt4 = object.question[6].option.length;
		var seleccion4 = document.getElementById("pregunta7");

		/*--------------------------------------------------------------------------------------------*/

		/*Pregunta8 Checkbox*/
		var nopt5 = object.question[7].option.length;
		var seleccion5 = document.getElementById("pregunta8");

		/*---------------------------------------------------------------------------------------------*/

		/*pregunta9 Radio*/
		var nopt6 = object.question[8].option.length;
		var seleccion6 = document.getElementById("pregunta9");

		/*---------------------------------------------------------------------------------------------*/

		/*pregunta10*/
		var nopt7 = object.question[9].option.length;
		var seleccion7 = document.getElementById("pregunta10");

		/*---------------------------------------------------------------------------------------------*/


		/*pregunta3*/
		for (var i =0; i<nopt; i++) {
			var opciones = document.createElement("option");
			opciones.className = "opciones3"
			opciones.value = object.question[2].option[i];
			opciones.text = object.question[2].option[i];
			seleccion.appendChild(opciones);
		}

		/*pregunta4*/
		for (var i = 0; i<nopt1; i++) {
			var opciones = document.createElement("option");
			opciones.className = "opciones4"
			opciones.value = object.question[3].option[i];
			opciones.text = object.question[3].option[i];
			seleccion1.appendChild(opciones);
		}

		/*pregunta5*/
		for (var i = 0; i < nopt2; i++) {
			var opciones = document.createElement("option");
			opciones.className = "opciones5"
			opciones.value = object.question[4].option[i];
			opciones.text = object.question[4].option[i];
			seleccion2.appendChild(opciones);
		}

		/*pregunta6*/
		for (var i = 0; i < nopt3; i++) {
			var opciones = document.createElement("option");
			opciones.className = "opciones6"
			opciones.value = object.question[5].option[i];
			opciones.text = object.question[5].option[i];
			seleccion3.appendChild(opciones);
		}

		/*pregunta7*/
		for (var i = 0; i < nopt4; i++) {
			var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = object.question[6].option[i];
			input.type = "checkbox";
			input.name = "cuadrados1";
			input.className = "opciones7";
			seleccion4.appendChild(input);
			seleccion4.appendChild(label);
			seleccion4.appendChild(document.createElement("br"));
		}

		/*pregunta8*/
		for (var i = 0; i < nopt5; i++) {
			var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = object.question[7].option[i];
			input.type = "checkbox";
			input.name = "cuadrados1";
			input.className = "opciones8";
			seleccion5.appendChild(input);
			seleccion5.appendChild(label);
			seleccion5.appendChild(document.createElement("br"));
		}

		/*pregunta9*/
		for (var i = 0; i < nopt6; i++) {
			var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = object.question[8].option[i];
			input.type = "radio";
			input.name = "circulos9";
			input.className = "opciones9";
			seleccion6.appendChild(input);
			seleccion6.appendChild(label);
			seleccion6.appendChild(document.createElement("br"));
		}

		/*pregunta10*/
		for (var i = 0; i < nopt7; i++) {
			var input = document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = object.question[9].option[i];
			input.type = "radio";
			input.name = "circulos10";
			input.className = "opciones10";
			seleccion7.appendChild(input);
			seleccion7.appendChild(label);
			seleccion7.appendChild(document.createElement("br"));
		}

	}
	function finalizar(){
		var correctas = 0;
		var incorrectas = 0;
		/*Preguntas 1 y 2*/
		var respuesta1 = document.getElementById("tipo1").value;
		var respuesta2 = document.getElementById("tipo2").value;

		if (respuesta1 == object.question[0].answer) {
			correctas++;
		}else{
			incorrectas++;
		}

		if (respuesta2 == object.question[1].answer) {
			correctas++;
		}else{
			incorrectas++;
		}

		/*preguntas de select*/
		var respuesta3;
		var respuesta4;
		var elementos3 = document.getElementsByClassName("opciones3");
		var elementos4 = document.getElementsByClassName("opciones4");
		for (var i = 0; i < elementos3.length; i++) {
			if (elementos3[i].selected) {
				respuesta3 = elementos3[i].value;
				if (respuesta3 == object.question[2].answer) {
					correctas++;
				}else{
					incorrectas++;
				}
			}
		}

		for (var i = 0; i < elementos4.length; i++) {
			if (elementos4[i].selected) {
				respuesta4 = elementos4[i].value;
				if (respuesta4 == object.question[3].answer) {
					correctas++;
				}else{
					incorrectas++;
				}
			}
		}

		/*preguntas de select multiple*/
		var respuesta5;
		var respuesta6;
		var elementos5 = document.getElementsByClassName("opciones5");
		var elementos6 = document.getElementsByClassName("opciones6");
		var elementos5seleccionados = [];
		var elementos6seleccionados = [];
		for (var i = 0; i < elementos5.length; i++) {
			if (elementos5[i].selected) {
				elementos5seleccionados.push(elementos5[i]);
			}
		}

		if (elementos5seleccionados == object.question[4].answer.length) {
			var opcionescorrectas = 0;
			for (var i = 0; i < elementos5seleccionados.length; i++) {
				var opcion5 = elementos5seleccionados[i].value;
				for (var j = 0; j < object.question[4].answer.length; j++) {
					respuesta = object.question[4].answer[j];
					if (opcion5 == respuesta) {
						opcionescorrectas++;
					}
				}
			}
			if (opcionescorrectas == object.question[4].length) {
				correctas++;
			}
		}else{
			incorrectas++;
		}



		for (var i = 0; i < elementos6.length; i++) {
			if (elementos6[i].selected) {
				elementos6seleccionados.push(elementos6[i]);
			}
		}

		if (elementos6seleccionados == object.question[5].answer.length) {
			var opcionescorrectas = 0;
			for (var i = 0; i < elementos6seleccionados.length; i++) {
				var opcion6 = elementos6seleccionados[i].value;
				for (var j = 0; j < object.question[5].answer.length; j++) {
					respuesta = object.question[5].answer[j];
					if (opcion6 == respuesta) {
						opcionescorrectas++;
					}
				}
			}
			if (opcionescorrectas == object.question[5].length) {
				correctas++;
			}
		}else{
			incorrectas++;
		}


		/*preguntas de checkbox*/
		var respuesta7;
		var respuesta8;
		var elementos7seleccionados = [];
		var elementos8seleccionados = [];

		var elementos7 = document.getElementsByClassName("opciones7");
		var elementos8 = document.getElementsByClassName("opciones8");

		for (var i = 0; i < elementos7.length; i++) {
			if (elementos7[i].checked) {
				elementos7seleccionados.push(elementos7[i]);
			}
		}

		if (elementos7seleccionados == object.question[6].answer.length) {
			var opcionescorrectas = 0;
			for (var i = 0; i < elementos7seleccionados.length; i++) {
				var opcion7 = elementos7seleccionados[i].value;
				for (var j = 0; j < object.question[6].answer.length; j++) {
					respuesta = object.question[6].answer[j];
					if (opcion7 == respuesta) {
						opcionescorrectas++;
					}
				}
			}
			if (opcionescorrectas == object.question[6].length) {
				correctas++;
			}
		}else{
			incorrectas++;
		}


		for (var i = 0; i < elementos8.length; i++) {
			if (elementos8[i].checked) {
				elementos8seleccionados.push(elementos8[i]);
			}
		}

		if (elementos8seleccionados == object.question[7].answer.length) {
			var opcionescorrectas = 0;
			for (var i = 0; i < elementos8seleccionados.length; i++) {
				var opcion8 = elementos8seleccionados[i].value;
				for (var j = 0; j < object.question[7].answer.length; j++) {
					respuesta = object.question[7].answer[j];
					if (opcion8 == respuesta) {
						opcionescorrectas++;
					}
				}
			}
			if (opcionescorrectas == object.question[7].length) {
				correctas++;
			}
		}else{
			incorrectas++;
		}


		/*preguntas de radio*/
		var respuesta9;
		var respuesta10;

		var elementos9 = document.getElementsByClassName("opciones9");
		for (var i = 0; i < elementos9.length; i++) {
			if (elementos9[i].checked) {
				respuesta9 = elementos9[i].value;
				if (respuesta9 == object.question[8].answer) {
					correctas++;
				}else{
					incorrectas++;
				}
			}
		}
		var elementos10 = document.getElementsByClassName("opciones10");
		for (var i = 0; i < elementos10.length; i++) {
			if (elementos10[i].checked) {
				respuesta10 = elementos10[i].value;
				if (respuesta10 == object.question[9].answer) {
					correctas++;
				}else{
					incorrectas++;
				}
			}
		}
	//document.getElementById("correctas").innerHTML = correctas;
	//document.getElementById("incorrectas").innerHTML = incorrectas;
	//document.getElementById("puntuacion") = correccion;
	alert("Correctas" +correctas+ "Incorrectas" +incorrectas);
}