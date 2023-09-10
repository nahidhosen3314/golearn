
$(function(){

    $(".course-card").owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        responsiveClass:true,
        responsive: {
            0:{
                items: 1,
                nav: false,
                dots: true,
            },
            700:{
                items: 2,

            },
            1050:{
                items: 3,
            }
        }
    });
});
