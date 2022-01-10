const mouseCursor = document.querySelector(".cursor");
document.addEventListener("mousemove", cursor);
document.addEventListener("click", clickit);

/* Updates cursor to match movement */
function cursor(e) {
    mouseCursor.setAttribute("style", "top: " + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px");
}

/* Creates custom animation during click */
function clickit(e) {
    mouseCursor.classList.add("expand");
    setTimeout(() => {
        mouseCursor.classList.remove("expand")
    }, 500);
}