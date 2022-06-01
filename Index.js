
// Criando COOKIES ---------
/*O cookie é uma propriedade do objeto window.document e possui uma
restrição numérica de 300 cookies no total e no máximo 20 cookies por site,
além de um tamanho máximo de 4 KB, embora estes números possam variar
conforme a versão do browser.
Quando gravamos um cookie, portanto, apenas inserimos uma variável string
que contém os valores desejados em um arquivo cookie que é associado ao
nosso documento.
*/
/*
function DefineCookie(nome, valor, form){
	document.cookie = nome+"="+valor+";";
	form.Nome.value = " ";
	form.Value.value = " ";
}
function ExibeCookie(form){
	form.Resultado.value = document.cookie;
}
// a função abaixo devolve o valor crente de um cookie;
function Getcookie(nome){
	var dc = document.cookie;
	var prefixo = nome + "=";
	var inicio = dc.indexOf(prefixo);
		if (inicio ==  -1){
			return null;
		}
	var final = document.cookie.indexOf(";",inicio);
		if(final == -1){
			final = dc.length;
			return unescape(dc.substring(inicio+prefixo.length, final));
		}
}
// definindo o N de vezes que o usuario visita o site
	function ContarVisitas(form){
		var visitas = Getcookie("visitas");
		if(!visitas){
			visitas = 1;
			form.ContarVisitas.value = "Esse é o seu primeiro click !";

		} else {
			visitas = parseInt(visitas) + 1 ;
			form.ContarVisitas.value = "Você clicou "+ visitas + "vezes";
		}
		 document.cookie = "Visitas="+visitas+";";
	}

	function gravarCookie(){
		var dataexp = new Date();// aqui coloca a data de expiração
		dataexp.setTime(dataexp.getTime() + (24 * 60 * 60 * 1000 * 1 );//vale por um dia
			setCookie (document.fm1.nome.value, document.fm1.valor.value, dataexp)
		);
	}


/*--------- fim da seção do Cookie -------*/


var numSlide = 1;
mostrarSlide(numSlide);

function mostrarSlide(ns){
	var i;
	var slides = document.querySelector("img");
	var indicadores = document.querySelector("radios");
//fazendo o controle dos slides
	if(ns > slides.length){
		numSlide = 1;
	}
	if(ns < slides.length){
		numSlide = slides.length;
	}

	for (var i= 0; i < slides.length;i++){
		slides[i].style.display = "none";
	}
	for (var i= 0; i < indicadores; i++){
		indicadores[i].className = indicadores[i].className.replace("ativo", " ");
	}
	slides[numSlide - 1].style.display = "block";
	indicadores[numSlide - 1].className += "ativo";
}
function mudarSlide(ns){
	mostrarSlide(numSlide += ns);
}

function SlideAtual(ns){
	mostrarSlide(numSlide = ns);
}