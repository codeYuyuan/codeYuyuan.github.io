$(document).ready(function() {
    $('.navbar').onePageNav();
    var winWidth;
    function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(52.108996, -106.594534),
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,

            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),
                    mapOptions);
            marker = new google.maps.Marker({
                map:map,
                draggable:true,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(52.108996, -106.594534)
            });
        }
    google.maps.event.addDomListener(window, 'load', initialize);

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



