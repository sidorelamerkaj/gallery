$(document).ready(function(){
	$('nav a').on('click', function(){
		//current class assignement
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		//set heading text

		$('h1#heading').text($(this).text()); //vendos tekstin te heading

		//get & filter link text
		var category = $(this).text().toLowerCase().replace(' ','-'); //zevendeson hapesiren me -
		// var category = $(this).data('sel');

		//remove hidden class if 'all-project' is selected
		if (category == 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden'); //i heq klasen hidden dhe i shfaq te gjithe elementet li te gallery
		} else {
			$('ul#gallery li:not(.'+category+')').hide().addClass('hidden'); //nese elementi nuk i perket kategorise qe po selektojme fshehi ata elemente

							
			
			$('ul#gallery li.'+category).fadeIn('slow').removeClass('hidden'); //nese elementi i perket kategorise shfaqi elementet 
			

			// $('ul#gallery li').each(function(){
			// 	if (!$(this).hasClass(category)) {
			// 		$(this).hide().addClass('hidden');

			// 	} else
			// 	{
			// 		$(this).fadeIn('slow').removeClass('hidden');
			// 	}
			// });
		}




		//stop link behaviour
		return false;

	});

	//mouse enter

	$('ul#gallery li').on('mouseenter', function(){
		//get data attribute values

		var title = $(this).children().data('title'); //kap elementet qe kane data perpara
		var desc = $(this).children().data('desc');
		//validation
		if (desc == null) {
			desc = 'Click to enlarge';
		}

		if (title == null) {
			title = ' ';
		}

		//create overlay div

		$(this).append('<div class="overlay"></div>');

		//get the overlay div

		var overlay = $(this).children('.overlay');

		//add html to overlay

		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		//fade in overlay

		overlay.fadeIn(800);

	});

	//mouse leave overlay 
	$('ul#gallery li').on('mouseleave', function(){

		//create overlay div

		$(this).append('<div class="overlay"></div>');

		//get the overlay div

		var overlay = $(this).children('.overlay');

		//fade out overlay

		overlay.fadeOut(100);

	});


});