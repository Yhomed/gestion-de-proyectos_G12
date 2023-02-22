window.addEventListener('load',function(){
    
    let formulario = document.querySelector('.form');
   
    formulario.addEventListener('submit',function(evento){
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
         
          let {name, surname, email, password, image } = formulario.elements;
          let errores = [];
        
         
          if(name.value == ''){
              errores.push('El campo nombre no puede estar vacio...');
              name.classList.add('is-invalid');   
          
          }else{
              name.classList.add('is-valid');
              name.classList.remove('is-invalid');
          }

          
          if(surname.value == ''){
            errores.push('El campo apellido no puede estar vacio...');
            surname.classList.add('is-invalid');   
           
        }else{
            surname.classList.add('is-valid');
            surname.classList.remove('is-invalid');
        }
       
        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
        if(!reEmail.test(email.value)){
            errores.push('El email es inválido...');
            email.classList.add('is-invalid');   
           
        }else{
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }
       
        let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!rePassword.test(password.value)){
            errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');
            password.classList.add('is-invalid');   
           
        }else{
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }
    
       
        if(image.value == ''){
            errores.push('Debe seleccionar su image en formato JPG - PNG ó JPEG');
            image.classList.add('is-invalid');   
           
        }else{
            image.classList.add('is-valid');
            image.classList.remove('is-invalid');
        }

          
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
