window.onload = function () {
    const form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const dni = document.getElementById('dni')
        const dniError = document.querySelector('.error-dni')
        if (dni.value === '') {
            dni.style.borderBottom = 'solid 2px crimson';
            dniError.classList.add('error');
            dniError.innerHTML = 'Tiene que ingresar su DNI';
        } else {
            dni.style.borderBottom = 'solid 2px whitesmoke';
            dniError.classList.remove('error');
            dniError.innerHTML = '';
        }
    })
}