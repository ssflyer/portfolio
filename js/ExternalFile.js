$(function(){
				$('#intro1').hide().delay(200).fadeIn(1000);
				$('#intro2').hide().delay(1100).fadeIn(500);
				$('#down').hide().delay(1400).fadeIn(400);
				/// Scroll down 
				$(window).scroll(function(){
					$('#intro').css("opacity",1-$(window).scrollTop()/300);
				});
				$(window).scroll(function(){
					$('#arrow').css("opacity",1-$(window).scrollTop()/100);
				});
				$(window).scroll(function(){
					if($(this).scrollTop()>50){
						$('#case-studies,#connect').fadeIn(); 
					} else {
						$('#case-studies,#connect').fadeOut();
					}
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