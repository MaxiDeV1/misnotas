window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        Swal.fire({
            title: '¡Antes de entrar!',
            text: 'Al precionar siguiente significa que estas de acuerdo con la norma que explica que esto es un medio INFORMATIVO y no OFICIAL',
            icon: 'warning',
            confirmButtonText: 'Siguiente'
        }).then(res => {
            if (res.isConfirmed) {
                form.submit()
            }
        })
    })
})
