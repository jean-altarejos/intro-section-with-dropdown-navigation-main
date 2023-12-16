$(".navbar-nav li:nth-child(1)").on("click", function(){
    $(".feature-toggler").toggleClass("active");
    $(".navbar-nav li:nth-child(1)::after").toggleClass("active");
});

$(".navbar-nav li:nth-child(2)").on("click", function(e){
    $(".company-toggler").toggleClass("active");
    $(".navbar-nav li:nth-child(2)::after").toggleClass("active");
});

$(".navbar-toggler").on("click", function(){
    $(".sidebar-mobile").addClass("active");
})

$(".navitem-feat").on("click", function(){
    $(".feat-menu").toggleClass("active");
})

$(".navitem-company").on("click", function(){
    $(".company-menu").toggleClass("active");
})

$(".cancel-btn").on("click", function(){
    $(".sidebar-mobile").removeClass("active");
})