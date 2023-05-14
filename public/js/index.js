window.onload = function () {
    let dni = document.getElementById('dni')
    dni.addEventListener('input', function () {
        const input = dni.value;
        const cantidad = 10000000;
        if (input > cantidad) {
            dni.style.backgroundColor = '#A51C30'
            dni.style.color = 'whitesmoke'
        } else {  
            dni.style.color = "black"
            dni.style.backgroundColor = ""
        }
    })
}

