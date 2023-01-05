//js to remove  the promotion advert
var promi = document.getElementById("prom");
var navs = document.getElementById("navigation");
function promo(elem) {
    promi.style.display = "none";
}

// js to trigger the navigation bar  in the mobile view
function open() {
    document.getElementsByClassName("nav-btns").style.display = "block";
}