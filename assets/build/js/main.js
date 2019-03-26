//SLICK-SLIDER
$(document).ready(function() {
	
	if($("select").length > 0) {
		$('select').niceSelect();
	}
	
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
	$('.content-slider').slick({
        infinite: true,
		arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1366,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 420,
		  settings: {
			slidesToShow: 2
		  }
		}
	  ]
    });
	
	if($(".button-main-menu-mobile").length > 0) {
		$(".button-main-menu-mobile").click(function(e){
			e.preventDefault();
			$(this).toggleClass("active");
			$(".main-menu-mobile").toggleClass("active");
		});
	};
	
	$(".open-menu").click(function(e){
		e.preventDefault();
		$(".menu-mobile-bg").fadeIn(300);
		//$(".menu-mobile").fadeIn(300);
		$(".menu-mobile").addClass("active");
		$("body").addClass("is-menu");
	})
	$(".close-menu-mobile").click(function(e) {
		e.preventDefault();
		$(".menu-mobile-bg").fadeOut(300);
		//$(".menu-mobile").fadeOut(300);
		$(".menu-mobile").removeClass("active");
		$("body").removeClass("is-menu");
	})
	
	createSliderRange("age_slider_from", "age_slider_to", "age_from", "age_to", 18, 40);
	createSliderRange("height_slider_from", "height_slider_to", "height_from", "height_to", 150, 190);
	
	function createSliderRange(slider_from_id, slider_to_id, input_to, input_from, min, max) {
		
		if($("#"+slider_from_id).length > 0 && $("#"+slider_to_id).length > 0) {
		
		var slider_from = document.getElementById(slider_from_id);
		var slider_to = document.getElementById(slider_to_id);
		
		noUiSlider.create(slider_from, {
			start: min,
			step: 1,
			animate: true,
			range: {
				min: min,
				max: max
			}
		});

		noUiSlider.create(slider_to, {
			start: max,
			step: 1,
			animate: true,
			range: {
				min: min,
				max: max
			}
		});

		slider_from.noUiSlider.on('update', function (values, handle) {
			var val_from = parseInt(values[handle]);
			var val_to = parseInt(slider_to.noUiSlider.get());
			
			$("#"+input_to).val("от "+val_from);
			if(val_to <= val_from) {
				slider_to.noUiSlider.set(val_from + 1);
			}
			sliderRangeBarUpdate($("#"+slider_from_id).parent().find(".input__bar"), min, max, val_from);
		});

		slider_to.noUiSlider.on('update', function (values, handle) {
			
			var val_from = parseInt(slider_from.noUiSlider.get());
			var val_to = parseInt(values[handle]);
			
			$("#"+input_from).val("до "+val_to);
			if(val_from >= val_to) {
				slider_from.noUiSlider.set(val_to - 1);
			}
			sliderRangeBarUpdate($("#"+slider_to_id).parent().find(".input__bar"), min, max, val_to);
		});
		}
	}
	
	function sliderRangeBarUpdate(bar, from, to, val) {
		var delta = to - from;
		var step = val - from;
		var width = 100 / (delta / step) + "%";
		console.log(delta, step, width);
		bar.css('width', width);
	}
	
	if($('#fullpage').length > 0) {
		$('#fullpage').fullpage({
			anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
			responsiveHeight: 600
		});
	}
	
	$('[data-fancybox="gallery"]').fancybox({
		toolbar: false,
		infobar: false,
		btnTpl: {
			arrowLeft:
			  '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left gallery__button" title="{{PREV}}">' +
			  "</button>",

			arrowRight:
			  '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right gallery__button" title="{{NEXT}}">' +
			  "</button>"
		},
	});
	
	if($(".popup").length > 0 && $(".open-popup").length > 0) {
		$(".open-popup").click(function(e){
			e.preventDefault();
			var id = $(this).attr("href");
			$(id).fadeIn(300);
			$("body").addClass("is-popup");
		});
		$(".popup__close").click(function(e){
			e.preventDefault();
			$(this).parent().fadeOut(300);
			$("body").removeClass("is-popup");
		});
	};
	
	if($(".for-comment").length > 0 && $("#comment").length > 0) {
		$(".for-comment").click(function(e){
			e.preventDefault();
			$("#comment").fadeIn(300);
			$("body").addClass("is-popup");
		});
	}
	
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