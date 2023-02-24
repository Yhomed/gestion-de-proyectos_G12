window.addEventListener('load',function(){
    
    
    let formulario = document.querySelector('.form');


    //let title = document.querySelector('.title');
    //let parrafo = document.querySelector('.parrafo');
    //let image = document.querySelector('.image');
    
    
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
        
          
          let {title,parrafo,image} = formulario.elements;
          let errores = [];
        
    
        if(title.value.length < 5){
            errores.name = "Este campo debe tener al menos 5 caracteres"}

        if(parrafo.value.length < 20){
            errores.name = "Este campo debe tener al menos 20 caracteres"}

            let imagen = document.getElementById("imagen"); //imagen es el id que le dan al input de imagen
            let isValid = /[/.](gif|jpeg|tiff|png)$/i.test(imagen.value);
                if(!isValid) {
                  alert("Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)");
                }; 
            
        
    

          let ulErrores = document.getElementById('errores');
          ulErrores.classList.add('text-danger')
          if(errores.length > 0){
              
              evento.preventDefault();
              ulErrores.innerHTML = "";
              for (let i = 0 ; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li> `
              }
              errores = [];
          }else{
              return true;
          } 
        }

    })



})