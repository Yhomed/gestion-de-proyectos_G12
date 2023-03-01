window.addEventListener('load',function(){
    
    
    let formulario = document.querySelector('.form');
    
    formulario.addEventListener('submit',function(evento){
        
        if(validaciones()){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(){
        
          
          let {email, password } = formulario.elements;
          let errores = [];
        
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
            errores.push('La contraseña como mínimo debe tener ocho caracteres, al menos una letra y un número');
            password.classList.add('is-invalid');   
          
        }else{
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

    
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