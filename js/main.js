document.querySelector('#formulario').addEventListener('submit', cadastraVeiculo)

function cadastraVeiculo(e) {
    let modeloCarro = document.querySelector('#modeloCarro').value;
    let placaCarro = document.querySelector('#placaCarro').value;
    let time = new Date();

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    if (localStorage.getItem('patio2') === null) {
        let carros = []
        carros.push(carro)
        localStorage.setItem('patio2', JSON.stringify(carros))
    } else {
        let carros = JSON.parse(localStorage.getItem('patio2'))
        carros.push(carro)
        localStorage.setItem('patio2', JSON.stringify(carros))
    }
    //localStorage.setItem('Teste', 'Olá Mundo!')
    //console.log(carro);
    mostraPatio()
    e.preventDefault();
}

function apagarVeiculo(placa) {
    var carros = JSON.parse(localStorage.getItem('patio2')) //Recupera o que tem no patio.

    for (let i = 0; i < carros.length; i++) {
        if(carros[i].placa == placa){
            carros.splice(i, 1)
        }

        localStorage.setItem('patio2', JSON.stringify(carros))
    }

    mostraPatio()

}

function mostraPatio() {
    let carros = JSON.parse(localStorage.getItem('patio2'))
    let carrosResultado = document.getElementById('resultados')

    carrosResultado.innerHTML = ''

    for (let i = 0; i < carros.length; i++) {
        let modelo = carros[i].modelo
        let placa = carros[i].placa
        let hora = carros[i].hora
        let minutos = carros[i].minutos

        carrosResultado.innerHTML += '<tr><td>' + modelo + 
                               '</td><td>' + placa +
                               '</td><td>' + hora + ' : ' + minutos +
                               '</td><td><button class="btn btn-danger" onclick="apagarVeiculo(\'' + placa + '\')">Excluir</button></td>' +
                               '</tr>'
    }
}