

$(document).ready(function(){

		var $menu_items = $('nav li');
		var $heading= $('h1#heading');
		 var $gallery_items = $('ul#gallery li');


	$menu_items.find('a').on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		//current class assignement
		$menu_items.filter('.current').removeClass('current');
		$this.parent().addClass('current');

		//set heading text

		$heading.text($this.text()); //vendos tekstin te heading

		//get & filter link text
		var category = $this.text().toLowerCase().replace(' ','-'); //zevendeson hapesiren me -
		// var category = $(this).data('sel');

		//remove hidden class if 'all-project' is selected
		if (category == 'all-projects') {
			$gallery_items.filter(':hidden').fadeIn('slow').removeClass('hidden'); //i heq klasen hidden dhe i shfaq te gjithe elementet li te gallery
			return;
		} 

		$gallery_items.filter(':not(.'+category+')').hide().addClass('hidden'); //nese elementi nuk i perket kategorise qe po selektojme fshehi ata elemente
			
		$gallery_items.filter('.'+category).fadeIn('slow').removeClass('hidden'); //nese elementi i perket kategorise shfaqi elementet 




		//stop link behaviour
		// return false;

	});

	//mouse enter

	$gallery_items.on('mouseenter', function(){
		var $this = $(this);
		var $a = $this.find('a');
		//get data attribute values

		var title = $a.data('title'); //kap elementet qe kane data perpara
		var desc = $a.data('desc');
		//validation
		if (desc == null) {
			desc = 'Click to enlarge';
		}

		if (title == null) {
			title = ' ';
		}

		//create overlay div

		$this.append('<div class="overlay"><h3>'+title+'</h3><p>'+desc+'</p></div>');

		//get the overlay div

		$this.find('.overlay').fadeIn(800);



	});

	//mouse leave overlay 
	$gallery_items.on('mouseleave', function(){
		var $this = $(this);

		//create overlay div

	

		//get the overlay div

		$this.find('.overlay').fadeOut(100, function(){
			$(this).remove();
		});

		//fade out overlay


	});


});