const contenedor = document.getElementById("contenedor");
const colores = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"];



for (let i=1; i<=6; i++){
    //CREAR UN DIV
    //Añadirlo al contenedor
    const cuadro=document.createElement("div");
    cuadro.classList.add("cuadro"); 
    contenedor.appendChild(cuadro);
}

function agregarCuadro(){
    
    const botonCuadro = document.getElementById("agregar");
    botonCuadro.addEventListener("click", function(){
        const cuadro=document.createElement("div");
        cuadro.classList.add("cuadro"); 
        contenedor.appendChild(cuadro);
    });
}

function eliminarCuadro(){
    const botonEliminar = document.getElementById("eliminar");
    botonEliminar.addEventListener("click", function(){
        // Quita el hijo
        contenedor.removeChild(contenedor.lastChild);
    });
}

function cambiarColorTodos(){
    const cuadros = document.querySelectorAll(".cuadro");

    cuadros.forEach(cuadro => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        cuadro.style.backgroundColor = colorAleatorio;
    });
}

    function botonCambiarColor(){
        const botonColor = document.getElementById("cambiarTodos");
        botonColor.addEventListener("click", cambiarColorTodos);
    }



agregarCuadro();
eliminarCuadro();
botonCambiarColor();