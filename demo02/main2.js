var $ = require('jquery');

document.write('<h2>Hello Webpack</h2>');

$('h2').on('click',	
	function(){
		$(this).html('My Name is Art');
		
		require('./style.css');
	}
)