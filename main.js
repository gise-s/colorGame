let boton = document.querySelector("button");
let ingreso = document.querySelector("input");

function cargarCiudad(ciudad) {

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(ciudad) + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function (data) {

        document.querySelector("#temperatura").textContent = `${Math.floor(data.main.temp)}°C`;
        document.querySelector("#ciudad").textContent = ciudad.toUpperCase();
        document.querySelector("img").setAttribute("src",
            `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
        document.querySelector("#descripcion").textContent = data.weather[0].description
        document.querySelector(".container").style.visibility = "visible";
        ingreso.value = ""
    }).fail(function() {
        if(ingreso.value.length>0) {
            document.querySelector(".container").style.visibility = "hidden";
             alert("Ciudad no encontrada");
         } else {
            document.querySelector(".container").style.visibility = "hidden";
             alert("Ingrese una ciudad, por favor")
         }
        })
};

boton.addEventListener("click", function () {
    let ciudad = ingreso.value;
    cargarCiudad(ciudad);
   
    
});

ingreso.addEventListener("keypress", function (e) {   
    if (e.key === 'Enter') {
    let ciudad = ingreso.value;
    cargarCiudad(ciudad);
    }
});

