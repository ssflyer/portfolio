$(function(){
				$('header').hide().delay(200).fadeIn(1000);
				$('#study,#connect').hide().delay(1000).fadeIn(500);

				$(window).on('resize',function(){ /// for resize
					$('#intro').css('margin-top', function () {
				    return ($(window).height() - $(this).height()) / 3
				});
				}).resize();

				/// Fadeout on page load
				$("a.transition").click(function(event){
					event.preventDefault();
					linkLocation = this.href;
					$("body").fadeOut(1000,redirectPage);
				});

				function redirectPage() {
					window.location = linkLocation;
				}
					
				if($('#back-to-top').length) { // Scroll top (credits to Gilbert Pellegrom)
					var scrollTrigger = 100, // px
        				backToTop = function () {
		            		var scrollTop = $(window).scrollTop();
		            		if (scrollTop > scrollTrigger) {
		                		$('#back-to-top').addClass('show');
		            		} else {
		                		$('#back-to-top').removeClass('show');
		            		}
			        	};
				    backToTop();
				    $(window).on('scroll', function () {
				        backToTop();
				    });
				    $('#back-to-top').on('click', function (e) {
				        e.preventDefault();
				        $('html,body').animate({
				            scrollTop: 0
				        }, 700);
				    });
				}

				});