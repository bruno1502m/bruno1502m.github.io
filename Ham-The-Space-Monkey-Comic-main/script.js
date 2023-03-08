
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function () {
    window.scrollTo(0, 0);
}

const neptune = document.getElementById('neptune');
const mars = document.getElementById('mars');
const response = document.getElementById('nar46');


neptune.addEventListener('click', () => {
    nar46.innerText = "Cannot find surface to land on planet Neptune!";
});


mars.addEventListener('click', () => {
    nar46.innerText = "Initiating landing sequence on planet Mars!";
});
