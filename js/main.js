 $(document).ready(function() {

    
	//------- Smooth Scroll  js --------//  
    $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
                                    
            
    //------- Event Timer Countdown  js --------//  

    if (document.getElementById("count")) {

        var countDownDate = new Date("November 15, 2021 10:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="count"
            document.getElementById("count").innerHTML =

                "<div class='col-md-3 col-xs-6 col-sm-6'><span>" + days + "</span><br> Days " + "</div>" + "<div class='col-md-3 col-xs-6 col-sm-6'><span>" + hours + "</span><br> Hours " + "</div>" + "<div class='col-md-3 col-xs-6 col-sm-6'><span>" + minutes + "</span><br> Minutes " + "</div>" + "<div class='col-md-3 col-xs-6 col-sm-6'><span>" + seconds + "</span><br> Seconds </div>";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("count").innerHTML = "EXPIRED";
            }
        }, 1000);

    }




//------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });


//------- Product Page --------//  

    $(document).ready(function(){
        var quantity = 1;

        $('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            $('#quantity').val(quantity + 1);
        });

        $('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            if(quantity > 1){
                $('#quantity').val(quantity - 1);
            }
        });

    });

    













});