const pantalla=document.querySelector(".pantalla");
const botones= document.querySelectorAll(".btn");


botones.forEach(boton=>{

    boton.addEventListener("click", (event) => {
        const botonApretado = boton.textContent;
       

        if(boton.id==="c"){

            pantalla.textContent="0";
            return;
        }

        if(boton.id==="borrar"){

            if(pantalla.textContent.length==1 || pantalla.textContent==="Error"){ /* si el contenido de la pantaLLa tiene
             una longitud igual a 1 o una cadena de texto string  me establecera el contenido en 0*/

                pantalla.textContent="0";
            }else{
                pantalla.textContent= pantalla.textContent.slice(0,-1); /* metodo  slice sustrae el primer elemento asta el ultimo*/
            }

            return;
        }

        if(boton.id==="igual"){
        
            try{
                pantalla.textContent = eval(pantalla.textContent);// evaluando
            }catch{
                pantalla.textContent="Error";
            }
   
            return;
     }

        if(pantalla.textContent==="0"||pantalla.textContent==="Error"){
            pantalla.textContent=botonApretado;
       }else{
        pantalla.textContent += botonApretado; /* me le asigna nuevamente el boton si no es el caracter 0  
        y asi puedo escribir de manera indefinida*/
       }

      

    });

});
