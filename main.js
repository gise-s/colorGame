//***variables***//
let cuadrados = document.querySelectorAll(".square");
let number = 6;
let colors = generateRandomColors(number);
let colorDisplay = document.querySelector("#colorDisplay")
let pickedColor = pickColor(6)
colorDisplay.textContent=pickedColor
let bReset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let h1 = document.querySelector("h1")
let clickedColor
////****////
function pickColor(num) {
   let i = Math.floor(Math.random() * num)
return colors[i] 
};

//itera sobre los cuadrados para agregarles el color

for (let i = 0; i < cuadrados.length; i++) {
   cuadrados[i].style.backgroundColor = colors[i]
   //agrego el evento click y comparo si es = el color elegido con el de pickColor
   cuadrados[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor
      if (clickedColor == colorDisplay.textContent) {
         message.textContent = "CORRECT!"
         h1.style.backgroundColor = clickedColor
         bReset.textContent = "Play again?"
         changeColor()
      }
      else {
         this.style.backgroundColor = " #232323"
         message.textContent = "TRY AGAIN"
      }
   });
};
//cambia de color los cuadrados al del titulo
function changeColor(i) {
   for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].style.backgroundColor = document.querySelector("#colorDisplay").textContent
   }
};




//generateRandomColors, que creará de forma random nuestro arreglo de colores utilizando la función randomColor que acabamos de crear

function generateRandomColors(num) {
   let color = []
   for (let i = 0; i < num; i++) {
      color[i] = randomColor()
   }
   return color
};
//Crea la función randomColor para generar y devolver un color random(recuerda que rgb son siempre 3 números entre 0 y 255).

function randomColor() {
   let a = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)
   let c = Math.floor(Math.random() * 256)
   return (`rgb(${a}, ${b}, ${c})`)
};




// boton RESET

function reset() {
   bReset.addEventListener("click", function () {
      colors = generateRandomColors(number)
      pickedColor = pickColor(6)
      for (let i = 0; i < cuadrados.length; i++) {
         cuadrados[i].style.backgroundColor = colors[i]
      }
      bReset.textContent= "New color";
     message.textContent = ""
      h1.style.background = "#232323"
      document.querySelector("#colorDisplay").textContent = pickedColor;
   })
}

//genero una función que asigne el color del título
//Ahora vamos a crear una función para asignarle a pickedColor un color random de nuestro arreglo de colores. 
//Para eso vamos a crear la función pickColor que devuelva un color random:





//boton easy y hard

function botoms() {

   easy.addEventListener("click", function () {
      easy.classList.add("selected")
      hard.classList.remove("selected")
      number = 3
      colors = generateRandomColors(number)
      pickedColor = pickColor(3)
      message.textContent = ""
      bReset.textContent= "New color"
      h1.style.backgroundColor="#232323"
      document.querySelector("#colorDisplay").textContent = pickedColor;
      for (let i = 0; i < cuadrados.length; i++) {
         if (cuadrados[i] = colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i]
         } else {
            cuadrados[i].style.display = "none"
         }
      }
   }
   )


   hard.addEventListener("click", function () {
      hard.classList.add("selected")
      easy.classList.remove("selected")
      number = 6
      colors = generateRandomColors(number)
      pickedColor = pickColor(6)
      message.textContent = ""
      bReset.textContent= "New color"
      h1.style.backgroundColor="#232323"
      document.querySelector("#colorDisplay").textContent = pickedColor
      for (let i = 0; i < cuadrados.length; i++) {
         cuadrados[i].style.backgroundColor = colors[i]
         cuadrados[i].style.display = "block"
      }
   })
}
botoms()
reset()
