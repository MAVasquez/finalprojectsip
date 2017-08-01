

var poems = ['Tenías que sentirte amada, segura, y feliz \ pero al contrario te sentistes roto, incapaz y desagradable-anonimo',
'le doy gracias a dios por todas las montañas que e tenido que caminar, para alcanzar el lugar designado-anonimo',
'No puedes esperar que alguien que no tiene vista \ que mire la belleza en ti-anonimo','tendras que \ querer pasar \ el resto de tu vida \ contigo primero-Rupi Kaur',
'y aquí estás viviendo apezar de todo-anonimo','ya no soy la misma niña que tenía una guerra \ blibrándose en su panza cuando la conocistes \ no vengas aqui con tus \ dedos desarmadores \ y intentes crear amor de mi \ que te ase pensar \ Que me caería de rodillas por ti? \ kres que esta cara se mira como el \ tipo de cara que te dejaría \ golpearla cuando ella \ no responde con un si \ esta es la cara de una mujer que \ te romperia el corazon con su mano \ si le pones un dedo encima \ sin su permiso<br> cariño, \ te asseguro \ que ya no soy la misma mujer \ con la que tu te enamoraste<br>tengo sueños más grandes que tu existencia \ no necesito que me corrijas-Rupi Kaur',
'yo puedo hacerlo todo con el que me da fuerza-Filipenses 4:13','es por que ella es una soñadora y Visualiza<br>sus sueños que ella puede planier cosa maravillosas \ que otras mujeres miran como impossible<br>su eficiencia, su poder, sus habilidades \ su paciencia, su gran seriedad, su maestría sobre otros, \ que hace su sueños en realidad. Ella suena y visualiza pero sus visiones \ nunca son solo visiones \ son hechos en su vida',
'en los días más oscuras, dios te pone las mejores personas en tu vida-John green','Hay infinitas oportunidades si estás dispuesto a buscarlas-anonimo','El principio de la belleza empieza en el conocerse y amándose - Kevyn Aucoin','Por favor acuérdate de perdonarte por los \ años de ansiedad que te diste \ acuérdate , que el paraíso y el infierno estan en tu cabeza \ en lo que te enfoques, lo volverás realidad. Si tu te enfocas en lo positivo, creas un paraíso. \ Si te enfocas en lo negativo, creas un infierno. \ I am the love of my life','Por lo tanto, no se angustien por el mañana, el cual tendrá sus propios afanes. Cada día tiene ya sus problemas.\ -mateo 6:34',
'De hecho, considero que en nada se comparan los sufrimientos actuales con la gloria que habrá de revelarse en nosotros. \ Romanos 8:18','acepta la idea que mereces más que un amor doloroso \ la vida continua \ y lo mejor para \ tu corazón es \ continuar-Rupi Kaur',
'Si naciste con \ la debilidad para caer, \ naciste con \ la fortaleza para levantarte-Rupi kaur','Yo se que es difícil \ creeme \ se que sientes como si \ mañana nunca llegará \ y hoy sera el dia mas \ difícil de tu vida \ pero te prometo que lo lograras el dolor pasara \ siempre lo hace \ si le das tiempo y lo dejas \ asi que dejalo ir \ lentamente \ como una promesa vacía, \ dejala ir \ -Rupi Kaur',
'acceptate \ cómo fuiste diseñado/a \ -Rupi Kaur','Pidan, y se les dará; busquen, y encontrarán; llamen, y se les abrirá. \ Porque todo el que pide, recibe; el que busca, encuentra; y al que llama, se le abre. \ -Mateo 7:7','Los caminos difíciles tienden a llevarnos a \ hermosos \ destinos \ -Pinterest']



function newPoem(){
	var randomNumber = Math.floor(Math.random() * (poems.length));
	document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}
