const $ = require('jquery')

const date = new Date()
let currentHour = date.getHours()
let currentMinute = date.getMinutes()

const inputs = $('input')

//deixando um valor padrão para os inputs
const inputHour = inputs[0]
const inputMinute = inputs[1]
const intervaloHour = inputs[2]
const intervaloMinute = inputs[3]
$(intervaloHour).attr('value', "01")
$(intervaloMinute).attr('value', 30)

function padronizarHora () {
    if (currentHour.toString().length < 2) {
        $(inputHour).attr('value', `0${currentHour}`)
    } 
    else {
        $(inputHour).attr('value', currentHour)
    }
}

function padronizarMinuto() {
    if (currentMinute.toString().length < 2) {
        $(inputMinute).attr('value', `0${currentMinute}`)
    }
    else {
        $(inputMinute).attr('value', currentMinute)
    }
}

padronizarHora()
padronizarMinuto()

//função para passar para o próximo input após preencher o primeiro
inputs.on('keyup', function() {
    const $this = $(this)
    if (this.value.length == $this.attr('maxlength')) {
        $this.next('input').trigger('focus')
    }
})

$('#calcTime').on('click', function(e) {
    let resultado = $('#resultado').get(0)
    let horaAtual = parseInt(inputHour.value)
    let horaIntervalo = parseInt(intervaloHour.value)
    let minutoAtual = parseInt(inputMinute.value)
    let minutoIntervalo = parseInt(intervaloMinute.value)

    let horaFinal = horaAtual + horaIntervalo
    let tempH = horaFinal
    let minutoFinal = minutoAtual + minutoIntervalo
    let tempM = minutoFinal
    let sobraMinuto = 0
    // teste minuto
    if (minutoAtual + minutoIntervalo >= 60) {
        sobraMinuto = minutoFinal % 60
        let minutoHora = Math.floor(minutoFinal / 60)
        horaFinal = horaFinal + minutoHora
        tempH = horaFinal
        minutoFinal = sobraMinuto
        tempM = minutoFinal
    }

    //teste hora
    if (horaAtual + horaIntervalo > 23 || horaFinal >= 24) {
        let sobraHora = horaFinal % 24
        horaFinal = 0 + sobraHora
        tempH = horaFinal
    }
    if (horaFinal.toString().length < 2) {
        
        horaFinal = `0${horaFinal}`
    }
    else { horaFinal = tempH }

    if (minutoFinal.toString().length < 2) {
        
        minutoFinal = `0${minutoFinal}`
    }
    else {
        minutoFinal = tempM 
        }

    resultado.textContent = `${horaFinal}:${minutoFinal}`
})

$('form').on('submit', (e) => e.preventDefault())