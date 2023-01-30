// HEADER Y NAV //

window.addEventListener("scroll", function(){
    
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

// BANNER SLIDER //

let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);