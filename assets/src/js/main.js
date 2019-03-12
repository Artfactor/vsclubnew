//SLICK-SLIDER
$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
	
	$('#fullpage').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
		responsiveHeight: 700
	});
	
	/*$(window).resize(function() {
		console.log($(window).height());
		if($(window).height() < 600) {
			$.fn.fullpage.destroy();
		}else{
			$.fn.fullpage.reBuild();
		}
	});*/
});

// Popup READ-MORE
$(document).ready(function($){
    //Открытие read-more-popup
    $('.read-more').on('click', function(event){
        event.preventDefault();
        $('.read-more-popup').addClass('read-more-show');
    });
    //Закрытие read-more-popup
    $('.close-read-more').on('click', function(){

            event.preventDefault();
            $('.read-more-popup').removeClass('read-more-show');
        // }
    });
    //Закрыть при нажатии esc на клавиатуре
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.read-more-popup').removeClass('read-more-show');
        }
    });
}); 

//Popup LOGIN
$(document).ready(function($){
    //Открытие блока входа
    $('.login').on('click', function(event){
        event.preventDefault();
        $('.login-popup').addClass('show');
    });
    //Закрытие read-more-popup
    $('.close-login').on('click', function(){
            event.preventDefault();
            $('.login-popup').removeClass('show');
        // }
    });
    //Закрыть при нажатии esc на клавиатуре
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.login-popup').removeClass('show');
        }
    });
}); 

//Закрываем по клику в любой области кроме попапа
$(document).click(function(e) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(e.target).closest(".login-popup, .login").length) {
        $('.login-popup').removeClass('show');
    }
  });
