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

        if(image.value.length < 2){
            errores.name = "Este campo debe tener al menos 2 caracteres"}
        
    

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