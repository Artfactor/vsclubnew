//SLICK-SLIDER
$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
	
	$('#fullpage').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
		responsiveHeight: 600
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
    //�������� read-more-popup
    $('.read-more').on('click', function(event){
        event.preventDefault();
        $('.read-more-popup').addClass('read-more-show');
    });
    //�������� read-more-popup
    $('.close-read-more').on('click', function(){

            event.preventDefault();
            $('.read-more-popup').removeClass('read-more-show');
        // }
    });
    //������� ��� ������� esc �� ����������
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.read-more-popup').removeClass('read-more-show');
        }
    });
}); 

//Popup LOGIN
$(document).ready(function($){
    //�������� ����� �����
    $('.login').on('click', function(event){
        event.preventDefault();
        $('.login-popup').addClass('show');
    });
    //�������� read-more-popup
    $('.close-login').on('click', function(){
            event.preventDefault();
            $('.login-popup').removeClass('show');
        // }
    });
    //������� ��� ������� esc �� ����������
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.login-popup').removeClass('show');
        }
    });
}); 

//��������� �� ����� � ����� ������� ����� ������
$(document).click(function(e) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(e.target).closest(".login-popup, .login").length) {
        $('.login-popup').removeClass('show');
    }
  });