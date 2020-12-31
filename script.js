
//Variables globales para guardar y actualizar datos de marcadores
var partidas=0;
var ganadas=0;
var perdidas=0;
var empates=0;


//Funcion jugar() que recive un parametro (jugada) y la compara con otra (jugadaCPU)
//para determinar cual gana segun juego (piedra, papel o tijeras) 
//y muestra el resultado por pantalla actualizando los marcadores.
function jugar(jugada){

	var CPU=jugadaCPU();

	if(jugada==CPU){
		empates++;
		resulTiros.innerHTML="Empate";
	}
	else if(jugada=="piedra" && CPU=="tijeras" 
			|| jugada=="papel" && CPU=="piedra" 
			|| jugada=="tijeras" && CPU=="papel"){

			ganadas++;
			resulTiros.innerHTML="Punto para Gryffindor";
	}
	else{
		perdidas++;
		resulTiros.innerHTML="Punto para Slytherin";
	}

	partidas++;

	//Actualizacion de interfaz grafica con css
	tiroJugador.src="imagenes/"+jugada+".png";
	tiro1.style.transform= "rotateY(180deg)";
	tiroCPU.src="imagenes/"+CPU+".png";
	tiro2.style.transform= "rotateY(180deg)";
	resulTiros.style.opacity="1.0";

	//Actualizacion de marcadores
	outPartidas.innerHTML=partidas;
	outGanadas.innerHTML=ganadas;
	outPerdidas.innerHTML=perdidas;
	outEmpates.innerHTML=empates;


	//Funcion setTimeout() que ejecuta otra funcion despues del tiempo dado
	setTimeout(girar,2000);

	printaVidas();
}


//Funcion jugadaCPU() que genera un numero random entre 0 y 2 
//y devuelve la palabra correspondiente al numero
function jugadaCPU(){
	var opcion=parseInt(Math.random()*3);
	switch(opcion){
		case 0: return "piedra"; break;
		case 1:return "papel"; break;
		default: return "tijeras";
	}
}


//Funcion girar() que oculta la visualizacion de las tiradas 
function girar(){
	tiro1.style.transform= "rotateY(0deg)";
	tiro2.style.transform= "rotateY(0deg)";
	resulTiros.style.opacity="0.0";
}


//Funcion printaVidas() que hace uso de las variable globales (perdidas, ganadas)
//para actualizar el numero de vidas mostradas en la interfaz grafica
//si has perdido el maximo de vidas o has ganado el maximo de veces se mostrara en pantalla 
//un mensaje con el resultado del juego y un boton para volver a jugar
function printaVidas(){
	if(perdidas==7){
		resulJuego.innerHTML="Has Perdido!!"
		modal.style.display="flex";
	}
	else if(ganadas==7){
		resulJuego.innerHTML="Has Ganado!!"
		modal.style.display="flex";
	}
	else{
		var vidas='';
		for(let i=7;i>perdidas;i--){
			vidas+='<img src="imagenes/horro'+i+'.png"/>';
		}
		vidasJugador.innerHTML=vidas;

		vidas='';
		for(let i=7;i>ganadas;i--){
			vidas+='<img src="imagenes/horro'+i+'.png"/>';
		}
		vidasCPU.innerHTML=vidas;
	}
}


//Funcion reiniciar() que resetea los valores de los marcadores y la interfaz grafica.
function reiniciar(){
	modal.style.display="none";
	partidas=0;
	ganadas=0;
	perdidas=0;
	empates=0;

	outPartidas.innerHTML=partidas;
	outGanadas.innerHTML=ganadas;
	outPerdidas.innerHTML=perdidas;
	outEmpates.innerHTML=empates;

	printaVidas();
}

printaVidas();

