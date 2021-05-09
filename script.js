const password = document.querySelector("#password");
const img = document.querySelector(".bg-img")

password.addEventListener("keydown",(e) => {
    let length = e.target.value.length;
    let blur = (20 - length * 2);
    img.style.filter = `blur(${blur}px)`;
})