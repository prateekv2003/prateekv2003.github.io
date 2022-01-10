const parallax = document.getElementsByClassName("parallax-effect");

window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.item(0).style.backgroundPositionY = offset * -0.2 + "px";
})