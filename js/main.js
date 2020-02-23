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

    e.preventDefault();
}