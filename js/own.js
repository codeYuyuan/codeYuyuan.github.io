$(document).ready(function() {
    $('.navbar').onePageNav();
    var winWidth;
    

    function methodToFixLayout( e ) {
        winWidth = $(window).width();
        startAni();
    }

    function InOut(elem) {
        var w = window.innerWidth;
        if(winWidth>1025){
            var delayOn = 4000, // time each <li> should be visible
                delayOff = 0, // time between revealing each <li>
                fade = 1000; // fade duration

            // Pause, fade in, pause again, fadeout, then fire the callback
            elem.delay(delayOff).fadeIn(fade).delay(delayOn).fadeOut(function() {
                // If we're not on the last <li>
                if (elem.next().length > 0) {
                    InOut(elem.next());
                }
                else {
                    // Else go back to the start
                    InOut(elem.siblings(':first'));
                }
            });
        }

    }

    function startAni() {
    
        if(winWidth>1025){InOut($('#mybannerinside li:first'));}
        else{
            $('#mybannerinside').hide();
            $('.mybanner').height(63);
        }

    }

    $(function() {
        methodToFixLayout();
    });
});



