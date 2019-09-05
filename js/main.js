$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    setInterval(function () {
        $('#cursor').animate({
            opacity: 1
        }, 400).animate({
            opacity: 0
        }, 400)
    }, 100);
});