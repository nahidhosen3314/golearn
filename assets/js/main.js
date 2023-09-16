
$(function(){

    // Menu
    $(".h-menu").clone().appendTo(".mobile-menu");

    $(".menu-bar").on("click", function(){
        $(this).toggleClass("active");
    });

   


    // course-card
    $(".course-card").owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        loop: true,
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

    // Testimonial
    var testimonial = $(".students").owlCarousel({
        items:1,
        smartSpeed: 1000,
        autoplay: true,
        loop: true,
        dots: false,
        items: 1,

    });

    $('.customNextBtn').click(function() {
        testimonial.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        testimonial.trigger('prev.owl.carousel', [1000]);
    })

    // logo

    $(".logo").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 20,
        loop: true,
        responsive: {
            0:{
                items: 1,
            },
            700:{
                items: 3,

            },
            1050:{
                items: 5,
            }
        }
    })

// ------- video-------------

const lightbox = GLightbox({  });




});

