

var poems = ['Tenías que sentirte amada, segura, y feliz \ pero al contrario te sentistes roto, incapaz y desagradable-anonimo',
'le doy gracias a dios por todas las montañas que e tenido que caminar, para alcanzar el lugar designado-anonimo',
'No puedes esperar que alguien que no tiene vista \ que mire la belleza en ti-anonimo','tendras que \ querer pasar \ el resto de tu vida \ contigo primero-Rupi Kaur']



function newPoem(){
	var randomNumber = Math.floor(Math.random() * (poems.length));
	document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}
