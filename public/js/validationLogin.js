window.onload = function () {
    const dniError = document.querySelector('.error-dni')
    const passError = document.querySelector('.error-password')
    const dni = document.getElementById('dni')
    const password = document.getElementById('password')
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (dni.value === '') {
            dniError.classList.add('error')
            dniError.innerHTML = 'Tiene que ingresar su DNI'
        } else if (dni.value.length < 8) {
            dniError.classList.add('error')
            dniError.innerHTML = 'El DNI tiene que tener 8 digitos por lo menos'            
        } 
        else {
            dniError.classList.remove('error')
            dniError.innerHTML = ''
        }
        if (password.value == '') {           
            passError.classList.add('error') 
            passError.innerHTML = 'Este campo no puede estar vacio'
        }else {
            passError.classList.remove('error')
            passError.innerHTML = ''
            form.submit()
        }
    })
    
}