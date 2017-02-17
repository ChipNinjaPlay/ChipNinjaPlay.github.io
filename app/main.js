//estilo basico
var $basic_styling = $('<link rel="stylesheet" type="text/css" href="../css/normalize.css"><link rel="stylesheet" type="text/css" href="../css/960.css"><link rel="stylesheet" type="text/css" href="../css/style.css">')

//estilo de paginas
var $main_styling = $('<link rel="stylesheet" type="text/css" href="../css/main.css">');
var $galery_styling = $('<link rel="stylesheet" type="text/css" href="../galeria/main.css">');
var $credits_styling = $('<link rel="stylesheet" type="text/css" href="../colaboradores/main.css">');

var $classes = ['.viewer', '.posts', '.galeria', '.credits'];
var $serach = '';

//a função toma um laço de repetição que checa cada uma das classes em $classes
//$search toma a saida da função find, que pode ser verdadeiro ou falso para a existência da classe
//caso a função exista, $search é verdadeira, adiciona-se a folha de estilo corresponde  no documento html
var leading = function() {

	for(var i = 0; i < $classes.length; i++) {

		switch(i) {

			case 0:
				$search = $('.content').find($classes[i]);
				if($search) {
					$('head').append($main_styling);
				}
			break;

			case 1:
				$search = $('.content').find($classes[i]);
				if($search) {
					$('head').append('');
				}
			break;

			case 2:
				$search = $('.content').find($classes[i]);
				if($search) {
					$('head').append($galery_styling);
				}
			break;

			case 3:
				$search = $('.content').find($classes[i]);
				if($search) {
					$('head').append($credits_styling);
				}
			break;

			default:
				alert("há algo errado!");
		}
	}
};

//aqui o jquery executa a função quando a página estiver totalmente carregada, evitando conflitos
$(document).ready( leading()
	);
