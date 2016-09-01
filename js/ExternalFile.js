$(function(){
				$('#intro1').hide().delay(200).fadeIn(1000);
				$('#intro2').hide().delay(1100).fadeIn(500);
				$('#down').hide().delay(1400).fadeIn(400);
				/// Scroll down 
				$(window).scroll(function () {
				  var scrollTop = $(window).scrollTop();
				  // you must put a condition so the value of 
				  //opacity remain between 0 and 1
				  // when viewing you website source code 
				  //from "Mozilla DOM Inspector" or any other dev tools
				  // you can see the the opacity is 
				  // between -6 and 6 witch are not valid value for opacity property
				  // so the arrow isn't shown 
				  if (scrollTop <= 300) {
				    $('#intro').css('opacity', 1 - scrollTop / 300);
				  }
				
				  // same for here
				  if (scrollTop <= 150) {
				    $('#arrow').css('opacity', scrollTop / 150); 
				    // "scrollTop/150" NOT "1 - ScrollTop/150" witch 
				    // will produce the opposite of what you want
				  }
				
				  // You have to put the value of fadeIn to 3 seconds 
				  // so the user can notice the effect 
				  //fadeIn(3000)
				
				  if (scrollTop > 50) {
				    $('#case-studies,#connect').fadeIn(3000);
				  } else {
				    $('#case-studies,#connect').fadeOut();
				  }
				
				});

			
				/// Scroll back to top
				$("a[href='#case-studies']").click(function() {
	  			$("html, body").animate({ scrollTop: 0 }, "slow");
	  			return false;
					});
				});	
				$("body").css("height",window.outerHeight + 200 + "px");	

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

				$(function () {
    
    updateDivsMargins();
    $(window).resize(updateDivsMargins);
    
    function updateDivsMargins() {
        $('#intro').each(function () {
            $(this).css({
                'margin-top !important': (-$(this).height() / 4)
            });
        });
    }
    
});

			});
