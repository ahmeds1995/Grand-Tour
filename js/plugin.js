$(function(){

    // Loading Page
    $(window).on("load",function(){

            $(".loading-overlay .spinner").fadeOut(2000, function(){

                $("body").css("overflow", "auto");

                $(this).parent().fadeOut(2000, function(){

                    $(this).remove();
                });
            });
    });

    // Trigger The Scroll Btn
    $(".scroll-to-top").on("click", function(){

        $("html,body").animate({scrollTop: 0},1200)
    });

    // About Page

    // Show The Provide Box And Hide Offer Box
    $(".offers-and-provides button").on("click", function(){

        $(this).addClass("active").siblings().removeClass("active");

        if($(".offers-and-provides .offers-btn").hasClass("active")){

            $(".offer").show();
            $(".offers").show(400);
            $(".provide").hide();
            $(".provides").hide();
        }
        else if($(".offers-and-provides .provides-btn").hasClass("active")){

            $(".provide").show();
            $(".provides").show(400);
            $(".offer").hide();
            $(".offers").hide();
        }
    });
});

