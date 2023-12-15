$(".navbar-nav li:nth-child(1)").on("click", function(e){
    $(".feature-toggler").toggleClass("active");
    $(".navbar-nav li:nth-child(1)::after").toggleClass("active");
});

$(".navbar-nav li:nth-child(2)").on("click", function(e){
    $(".company-toggler").toggleClass("active");
    $(".navbar-nav li:nth-child(2)::after").toggleClass("active");
});