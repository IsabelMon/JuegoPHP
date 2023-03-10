/*=============================================
METODOS DEL OBJETO INICIO
=============================================*/

var inicio = {

	/*=============================================
	METODO INGRESO A LA APLICACIÓN
	=============================================*/

	iniciar: function(){

		var identificador = "22222222";		
		var primer_nombre = "julio";
		var foto = "views/img/intro/julioo.png";	
		var xhr = new XMLHttpRequest();
		var url = "views/ajax/usuarios.php";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("identificador="+identificador+"& primer_nombre="+primer_nombre+"& foto="+foto);

		xhr.onreadystatechange = function(){

			if((xhr.readyState == 4) && (xhr.status == 200)){

				if(xhr.responseText == "ok"){

					window.location = "inicio";
				}
			}

		}

	},

	/*=============================================
	ELEGIR NIVEL
	=============================================*/

	elegirNivel: function(event){

		datos.nivel = event.getAttribute("nivel");
		datos.id = event.getAttribute("id");

		if(screenfull.enabled){
			screenfull.request(document.querySelector("#contenedor"))
		}
	
		inicio.inicioNiveles(datos.nivel);

	},

	/*=============================================
	INICIO DE NIVELES
	=============================================*/

	inicioNiveles: function(nivel){

		document.querySelector("#inicio").parentNode.removeChild(document.querySelector("#inicio"));

		canvas = document.querySelector("#lienzo");
		ctx = canvas.getContext("2d");

		document.querySelector("#carga").style.display = "block";

		/*=============================================
		PLANO 3
		=============================================*/

		datos.plano3 = new Image();
		datos.plano3.src = "views/img/nivel"+nivel+"/planos3.png";

		/*=============================================
		PLANO 2
		=============================================*/

		datos.plano2 = new Image();
		datos.plano2.src = "views/img/nivel"+nivel+"/planos2.png";

		/*=============================================
		PLANO 1
		=============================================*/

		datos.plano1 = new Image();
		datos.plano1.src = "views/img/nivel"+nivel+"/planos1.png";

		/*=============================================
		DETALLES
		=============================================*/

		datos.detalles = new Image();
		datos.detalles.src = "views/img/nivel"+nivel+"/detalless.png ";

		if(nivel == 1){

		 	var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel1.json", true)

		}

		if(nivel == 2){

			var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel2.json", true)  

		}

		if(nivel == 3){

      		var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel3.json", true)
		}

		xhr_detalles.send();

		xhr_detalles.onreadystatechange = function(){

			if ((xhr_detalles.readyState == 4)&&(xhr_detalles.status == 200)){

				datos.bloquesDetalles = JSON.parse(xhr_detalles.responseText)

			}
		}

		/*=============================================
		BLOQUES
		=============================================*/

		datos.texturaPlataforma = new Image();
		datos.texturaPlataforma.src = "views/img/nivel"+nivel+"/texturaPlataforma.jpg";	

		if(nivel == 1){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel1.json", true)

		}

		if(nivel == 2){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel2.json", true)
		}


		if(nivel == 3){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel3.json", true)
		}

		xhr.send();

		xhr.onreadystatechange = function(){

			if ((xhr.readyState == 4)&&(xhr.status == 200)){

				datos.bloques = JSON.parse(xhr.responseText)

			}
		}

		/*=============================================
		PLATAFORMAS
		=============================================*/

		if(nivel == 1){

		 	var xhr_plataforma = new XMLHttpRequest();
			xhr_plataforma.open("GET", "views/js/json/plataformasNivel1.json", true)

		}

		if(nivel == 2){

			var xhr_plataforma = new XMLHttpRequest();
			xhr_plataforma.open("GET", "views/js/json/plataformasNivel2.json", true)  

		}

		if(nivel == 3){

      		var xhr_plataforma = new XMLHttpRequest();
			xhr_plataforma.open("GET", "views/js/json/plataformasNivel3.json", true)
		}

		xhr_plataforma.send();

		xhr_plataforma.onreadystatechange = function(){

			if ((xhr_plataforma.readyState == 4)&&(xhr_plataforma.status == 200)){

				datos.plataforma = JSON.parse(xhr_plataforma.responseText)

			}
		}

		/*=============================================
		MONEDAS
		=============================================*/

		if(nivel == 1){

		 	var xhr_monedas = new XMLHttpRequest();
			xhr_monedas.open("GET", "views/js/json/monedasNivel1.json", true)

		}

		if(nivel == 2){

			var xhr_monedas = new XMLHttpRequest();
			xhr_monedas.open("GET", "views/js/json/monedasNivel2.json", true)  

		}

		if(nivel == 3){

      		var xhr_monedas = new XMLHttpRequest();
			xhr_monedas.open("GET", "views/js/json/monedasNivel3.json", true)
		}

		xhr_monedas.send();

		xhr_monedas.onreadystatechange = function(){

			if ((xhr_monedas.readyState == 4)&&(xhr_monedas.status == 200)){

				datos.posMonedas = JSON.parse(xhr_monedas.responseText)

				for(var i = 0; i < datos.posMonedas.length; i ++){

					datos.imgMonedas[i] = new Image();
					datos.imgMonedas[i].src = "views/img/utileria/monedas.png";
				}

			}
		}

		/*=============================================
		TRAMPAS
		=============================================*/

		if(nivel == 1){

		 	var xhr_trampas = new XMLHttpRequest();
			xhr_trampas.open("GET", "views/js/json/trampasNivel1.json", true)

		}

		if(nivel == 2){

			var xhr_trampas = new XMLHttpRequest();
			xhr_trampas.open("GET", "views/js/json/trampasNivel2.json", true)  

		}

		if(nivel == 3){

      		var xhr_trampas = new XMLHttpRequest();
			xhr_trampas.open("GET", "views/js/json/trampasNivel3.json", true)
		}

		xhr_trampas.send();

		xhr_trampas.onreadystatechange = function(){

			if ((xhr_trampas.readyState == 4)&&(xhr_trampas.status == 200)){

				datos.posTrampas = JSON.parse(xhr_trampas.responseText)

				for(var i = 0; i < datos.posTrampas.length; i ++){

					datos.imgTrampas[i] = new Image();
					datos.imgTrampas[i].src = "views/img/utileria/trampas.png";
				}

			}
		}

		/*=============================================
		JUGADOR
		=============================================*/

		datos.imgJugador = new Image();
		datos.imgJugador.src = "views/img/jugador/stop_right.png";

		/*=============================================
		PLANO 0
		=============================================*/

		datos.plano0 = new Image();
		datos.plano0.src = "views/img/nivel"+nivel+"/plano0.png";
	
		/*=============================================
		PRELOAD
		=============================================*/

		var cargarArchivos = [datos.plano0, datos.texturaPlataforma, datos.detalles, datos.plano1, datos.plano2, datos.plano3];
		var numeroArchivos = 0;
		var porcentaje = 0;

		for(var i = 0; i < cargarArchivos.length; i++){

			cargarArchivos[i].addEventListener("load", precarga)
		}

		function precarga(e){
			
			numeroArchivos++;
			porcentaje = 100 / cargarArchivos.length;

			document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroArchivos) + "%";
			document.querySelector("#carga meter").value = Math.ceil(porcentaje * numeroArchivos);

			if(numeroArchivos == cargarArchivos.length){

				document.querySelector("#lienzo").style.display = "block";
				document.querySelector("#btnAmpliar").style.display = "block";

				document.querySelector("#carga").style.opacity = 0; 

				setTimeout(function(){
								 
					document.querySelector("#carga").style.display = "none";
					  
				},10); 

				juego.teclado();
				juego.tiempo(); 

			}

		}

	}

}