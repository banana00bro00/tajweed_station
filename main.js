window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    });
});

// No internet
const error = document.getElementById('noEnterNet');

if (!navigator.onLine) {
    error.className = "show";
    setTimeout(function(){
        error.className = error.className.replace("show", ""); }, 3000);
} else {
    error.classList.remove("show");
}

// up btn
let upBtn = document.querySelector(".up-btn");
