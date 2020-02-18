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

    console.log(carro);

    e.preventDefault();
}