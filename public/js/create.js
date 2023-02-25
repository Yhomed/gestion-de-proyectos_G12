window.addEventListener('load',function() {
    
    let formulario = document.querySelector('.form');

    formulario.addEventListener('submit',function(evento){

        evento.preventDefault();

        if(validaciones()) {

            evento.preventDefault();

        } else {

            formulario.submit();

        }    

        function validaciones(){
        
          
          let {title,parrafo,image} = formulario.elements;
          let errores = [];
        
    
        if(title.value.length < 5){

            errores.push("El campo titulo: debe tener al menos 5 caracteres")

        }

        if(parrafo.value.length < 20){

            errores.push("El campo parrafo: debe tener al menos 20 caracteres")

        }

        let isValid = /[/.](gif|jpg|jpeg|tiff|png)$/i.test(image.value);
        if(!isValid) {

            errores.push("La imagen deberá ser un archivo válido (JPG, JPEG, PNG, GIF)")

        };
            
    
          let ulErrores = document.getElementById('errores');
          ulErrores.classList.add('text-danger')
          if(errores.length > 0) {
              
              ulErrores.innerHTML = "";

              for (let i = 0 ; i < errores.length; i++){

                ulErrores.innerHTML += `<li> ${errores[i]} </li> `

              }

              errores = [];

              return true

          } else {

              return false;

          } 

        }

    })

})



