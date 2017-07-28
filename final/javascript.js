var poems = [' You were supposed to feel loved, safe and happy \ Instead you feel torn, incapable and unpleased-Anoymous',
'I thank god for all the hills i\'ve had to walk \ In order to reach my designated place -Anoymous',
'You can\'t expect someone who is blind \ To see the beauty you hold -Anoymous',
'You must \ want to spend \ the rest of your life\ with yourself \ first-Rupi Kaur',
]




function newPoem(){
	var randomNumber = Math.floor(Math.random() * (poems.length));
	document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}




