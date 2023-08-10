function verificaSeOChutePossuiValorValido(chute) {
  const numero = +chute;

  const numeros = {
    "zero zero": 0,
    "00": 0,
    "01": 1,
    um: 1,
    dois: 2,
    três: 3,
    quatro: 4,
    cinco: 5,
    seis: 6,
    sete: 7,
    oito: 8,
    nove: 9,
    dez: 10,
  };

  const corrigeNumeros = (palavra) => {
    for (numero in numeros) {
      if (palavra === numero) {
        palavra = numeros[numero];
      }
    }
    return palavra;
  };

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-game-over" >Jogar novamente</button>
                `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>Valor inválido</div>";
      return;
    }
  }
  if (numeroForMaiorOuMenorQueOvalorPermitido(numero)) {
    elementoChute.innerHTML += `Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era: ${numeroSecreto}</h3>
    <buton id='jogar-novamente' class='btn-jogar'>Jogar novamente</buton>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
        O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i>
      </div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>
        O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i>
      </div>
    `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
