AOS.init();

const dataAniversario = new Date("Mar 29, 2024 10:45:00");
const timeStampAniversario = dataAniversario.getTime();

const contaOsDias = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diasAteAniversario = timeStampAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const distanciaAteAniversario = Math.floor(diasAteAniversario / diasEmMs);
    const horaAteAniversario = Math.floor((diasAteAniversario % diasEmMs) / horaEmMs);
    const MinutosAteAniversario = Math.floor((diasAteAniversario % horaEmMs) / minutosEmMs);
    const segundosAteAniversario = Math.floor((diasAteAniversario % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${distanciaAteAniversario}d ${horaAteAniversario}h ${MinutosAteAniversario}m ${segundosAteAniversario}s`;

    if (diasAteAniversario < 0) {
        clearInterval(contaOsDias);
        document.getElementById('contador').innerHTML = 'O Rep Bardei acabou!';
    }
}, 1000);