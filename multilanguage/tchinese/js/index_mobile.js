var mobile_show = document.getElementById("mobile_show");
var mobile_functions = document.getElementById("title_mobile_functions");

mobile_show.addEventListener("click", (event) => {
    mobile_functions.style.display = "block";
    event.stopPropagation();
})

document.addEventListener("click", () => {
    mobile_functions.style.display = "none";
})

mobile_functions.addEventListener("click", (event) => {
    event.stopPropagation();
})