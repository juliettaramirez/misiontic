let cerrar = document.querySelectorAll(".close")[0];
let cancelar = document.querySelectorAll(".cancelar")[0];
let abrir = document.querySelectorAll(".btnEdit")[0];
let modalEdit = document.querySelectorAll(".modalEdit")[0];
let modalC = document.querySelectorAll(".modalContainer")[0];
let guardar = document.querySelectorAll(".confirmButton")[0];

console.log(abrir);
guardar.addEventListener("click", function(e){
    e.preventDefault();
    modalEdit.classList.toggle("modalEditClose");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },700);
    setTimeout(function(){
        alert("Los cambios se guardaron correctamente");
    },300)
})
abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modalEdit.classList.toggle("modalEditClose");

})

cerrar.addEventListener("click", function(e){
    e.preventDefault();
    modalEdit.classList.toggle("modalEditClose");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },700); 

})
cancelar.addEventListener("click", function(e){
    e.preventDefault();
    modalEdit.classList.toggle("modalEditClose"); 
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },700);
})
window.addEventListener("click", function(e){
    if(e.target == modalC)
    {
        modalEdit.classList.toggle("modalEditClose");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },700);
    }

})