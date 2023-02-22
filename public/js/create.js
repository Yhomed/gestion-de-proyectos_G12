window.addEventListener('load',function(){
    
    
    let formulario = document.querySelector('.form');
    let title = document.querySelector('.title');
    let parrafo = document.querySelector('.parrafo');
    let image = document.querySelector('.image');
    let number = document.querySelector('.number');
    let price = document.querySelector('.price');
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
        
          
          let {title,parrafo,image,number,price} = formulario.elements;
          let errores = [];
        
    
        if(title.value.length < 5){
            errores.title = "Este campo debe tener al menos 5 caracteres"}

        if(parrafo.value.length < 20){
                errores.parrafo = "Este campo debe tener al menos 20 caracteres"}

        if(image.value.length < 2){
                    errores.image = "Este campo debe tener al menos 2 caracteres"}
        
    

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