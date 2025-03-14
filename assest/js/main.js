const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Pegando o input inteiro do formulário <input id="altura" class="altura" name="altura">
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  // Pegando o valor do input do formulário
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Validando os dados
  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  // Calculando o IMC
  const imc = ImcCalculado(peso, altura);
  const categoria = categoriaImc(imc);

  const msg = `Seu IMC e ${imc} (${categoria})`;
  setResult(msg, true);
});

// Função para calcular o IMC
function ImcCalculado(peso, altura) {
  const imc = peso / Math.pow(altura, 2);
  return imc.toFixed(2);
}

//função para classificar a catedoria do IMC
function categoriaImc(imc) {
  const categoria = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc < 18.5) return categoria[0];
  if (imc < 24.9) return categoria[1];
  if (imc < 29.9) return categoria[2];
  if (imc < 34.9) return categoria[3];
  if (imc < 39.9) return categoria[4];
  return categoria[5];
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isvalid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = createP();

  if (isvalid) {
    p.classList.add("mostrar");
  } else {
    p.classList.add("invalido");
  }

  // Resetando o formulário
  form.reset();

  p.innerHTML = msg;
  resultado.appendChild(p);

  // Removendo a classe "mostrar" após 5 segundos (5000 milissegundos)
  setTimeout(() => {
    p.classList.remove("mostrar");
    p.classList.remove("invalido");
    p.innerHTML = "";
  }, 5000); // 5000ms = 5 segundos
}
