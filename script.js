let header = document.querySelector(".header"),
    headerP = header.querySelector("p"),
    options = document.querySelector(".options")
    opt = document.querySelectorAll(".opt");

header.addEventListener("click", () => {
    options.classList.toggle("active");
    opt.forEach((x) => {
        let optP = x.querySelector("p");
        x.addEventListener("mouseover", () => {
            headerP.innerHTML = optP.innerHTML;
        })
        x.addEventListener("click", () => {
            headerP.innerHTML = optP.innerHTML;
            options.classList.remove("active");
        })
    })
}) 