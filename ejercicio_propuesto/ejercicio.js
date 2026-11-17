function enviar() {
    var contenido = document.querySelector('#contenido')
    var v1 = document.querySelector('#t1').value
    var v2 = document.querySelector('#t2').value
    var v3 = document.querySelector('#t3').value
    var url = ""

    if (document.querySelector('#opcion1').checked)
        url = 'http://127.0.0.1:5000/ecuacion/' + v1 + '/' + v2
    else if (document.querySelector('#opcion2').checked)
        url = 'http://127.0.0.1:5000/tabla/' + v1
    else if (document.querySelector('#opcion3').checked) {
        if (v1 == 3)
            url = 'http://127.0.0.1:5000/areas/' + v1 + '/' + v2 + '/' + v3
        else
            url = 'http://127.0.0.1:5000/areas/' + v1 + '/' + v2
    }
    else
        swal("Mensaje", "Seleccione una opción", "warning");

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.text()
            } else {
                throw "Error en la llamada"
            }
        })
        .then(function (texto) {
            console.log(texto)
            contenido.innerHTML = texto
        })
        .catch(function (error) {
            console.log(error)
            document.write(error)
            swal(error)
            swal({
                title: "Advertencia",
                text: error,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
        })
}

// opción para ecuación
function opcion1() {
    var t1 = document.querySelector('#t1')
    var t2 = document.querySelector('#t2')
    var t3 = document.querySelector('#t3')
    t1.disabled = false
    t2.disabled = false
    t3.disabled = true
    t1.value = ""
    t2.value = ""
    t3.value = ""
    t1.placeholder = "Valor X"
    t2.placeholder = "Valor Z"
    t3.placeholder = ""
}

// opción para tabla
function opcion2() {
    var t1 = document.querySelector('#t1')
    var t2 = document.querySelector('#t2')
    var t3 = document.querySelector('#t3')
    t1.disabled = false
    t2.disabled = true
    t3.disabled = true
    t1.value = ""
    t2.value = ""
    t3.value = ""
    t1.placeholder = "Número"
    t2.placeholder = ""
    t3.placeholder = ""
}

// opción para áreas
function opcion3() {
    var t1 = document.querySelector('#t1')
    var t2 = document.querySelector('#t2')
    var t3 = document.querySelector('#t3')
    t1.disabled = false
    t2.disabled = false
    t3.disabled = false
    t1.value = ""
    t2.value = ""
    t3.value = ""
    t1.placeholder = "1:Cír 2:Cuad 3:Tri"
    t2.placeholder = "Radio / Lado / Base"
    t3.placeholder = "Altura (solo Triángulo)"
}