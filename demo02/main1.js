var $ = require('jquery');
document.write('<h1>Hello World</h1>');

$(function(){
	$('button').on('click',function(){
		require('./main2');
	})
	
	$('img').on('click',function(){
		$(this).attr('src',require('./big.jpg'));
	})
})