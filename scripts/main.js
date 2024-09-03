const toTop = document.querySelector('.gotopbtn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if(window.scrollY > 100) {
        toTop.style.display = "flex"
    } else {
        toTop.style.display = "none"
    }
}