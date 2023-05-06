/*JS*/


/* SUCURSALES */
let spanSuc = document.querySelectorAll(".span_sucursales");

spanSuc.forEach((span) =>{
span.addEventListener("click",(e) =>{
     let span_e = e.target;
console.log(span_e)
span_e.classList.toggle("active");
})
})