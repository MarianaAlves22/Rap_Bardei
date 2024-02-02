AOS.init();

const dataAniversario = new Date("Mar 29, 2024 10:45:00");
const timeStampAniversario = dataAniversario.getTime();

const contaOsDias = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diasAteAniversario = timeStampAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;

    const distanciaAteAniversario = Math.floor(diasAteAniversario / diasEmMs);

    document.getElementById('contador').innerHTML = `${distanciaAteAniversario}d`;

    if (diasAteAniversario < 0) {
        clearInterval(contaOsDias);
        document.getElementById('contador').innerHTML = 'O Rep Bardei acabou!';
    }
}, 1000);