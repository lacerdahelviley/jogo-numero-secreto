const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-BR";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
      <span class="box">${chute}</span>
      <div>
    `;
}

recognition.addEventListener('end', () => recognition.start())