var poems = [' You were supposed to feel loved, safe and happy \ instead you feel torn, incapable and unpleased-Anoymous',
'I thank god for all the hills i\'ve had to walk \ in order to reach my designated place -Anoymous',
'You can\'t expect someone who is blind \ to see the beauty you hold -Anoymous',
'You must \ want to spend \ the rest of your life\ with yourself \ first-Rupi Kaur',
'And here you are living despite it all  \ -Anoymous',
'I am not the same girl who had a war \ waging in her belly when you met her \ don\'t come here with your \ screwdriver fingers \ and try to make a lover out of me \ what makes you think \ I\'d fall to my knees for you? \ does this face look like the \ type of face that\'ll let you \ slap her around when she \ doesn\'t answer yes \ this is the face of a woman who\'ll \ rip your heart out with her fist \ if you lay a finger on her \ without her permission \ Darling.\ be assured \ I am not the same woman \ you fell in love with \ I wear dreams bigger than your existence \ I dont need your fixing',
'I can do all this through him who gives me strength Philipians 4:13',
'It is because she is a dreamer and visualizes her dreams that she can plan great things \ that other women would seem as impossible; her intense efficency, her power, her skills , her patience,\ her fine earnestness, her mastery over others, \ which develop her dreams into realities.\ She dreams and sees visions but her visions are never just visions \ they are dreams that become facts in her life',
'In the darkest days\  the lord puts the best people into your life\ -John green',
'There are infinite opportunities if you choose to seek them',
'Beginning of beauty begins by knowing and liking oneself \-Kevyn Aucoin',
'Please remember to forgive yourself for the years your anxiety took away from you\ remember\ ,that paradise and the hell is your head.\ what you focus on\,you make it reality\ if you focus on positive things\,you create a paradise \ if you focus on negative things\ , you create hell\ - I am the love of my life',
'Pray more worry less Matthew 6:34',
'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us\ Romans 8:18',
'Accept that you deserve more than painful love life is moving the healthiest thing for your heart is to move with it \ -Rupi Kaur',
'If you were born with the weakness to fall You were born with the strength to rise\ -Rupi Kaur',
'I know it\'s hard believe me I know it feels like tomorrow will never come And today will be the most difficult day to get through but I swear you will get through the hurt will pass As it always does if you give it time and let it So let it go slowly like a broken promise let it go \-Rupi Kaur',
'Accept yourself As you were designed \-Rupi Kaur',
'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you\ Mattew 7:7',
'Difficult roads often lead To beautiful destinations \-Pinterest',
]









function newPoem(){
	var randomNumber = Math.floor(Math.random() * (poems.length));
	document.getElementById('poemDisplay').innerHTML = poems[randomNumber];
}