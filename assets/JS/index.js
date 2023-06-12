$(function () {
    $("#inputDescuento").click(function () {
        $(this).css({
            'background-color': 'lightblue',
            'color': 'blue'
        })
    })
})

$(function () {
    $("#inputDescuento").keyup(function () {
        if($(this).val() == 'JQUERY2222') {
            $(this).css({
                'background-color': 'lightgreen',
                'color': 'green'
            })
    }
})
})


$(function () {
    $("#botonCompra").click(function () {
        $(this).attr('class', 'container btn btn-warning text-white')
        $(this).text('¿Estás seguro?')
    })
})

$(function () {
    $("#botonCompra").dblclick(function () {
        $(this).attr('class', 'container btn btn-primary text-white')
        $(this).text('¡OK!')
    })
})


$(function () {
    $("#botonCompra").mouseout(function () {
        $(this).attr('class', 'container btn border-danger')
        $(this).text('COMPRADO')
        $(this).css({
            'color': 'green'
        })
    })
})
