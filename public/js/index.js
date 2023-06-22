window.onload = function () {
    let dni = document.getElementById('dni')
    dni.addEventListener('input', function () {
        const input = dni.value;
        if (input.length > 8) {
            dni.style.backgroundColor = '#A51C30'
            dni.style.color = 'whitesmoke'
        } else {  
            dni.style.color = "black"
            dni.style.backgroundColor = ""
        }
    })
}

