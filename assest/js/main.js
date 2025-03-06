function imc() {
  const form = document.querySelector("#formulario");
  const resultadoImc = document.querySelector("#resultadoImc");

  // Função para calcular o IMC e retornar com 2 casas decimais
  function calculaImc(pesoValor, alturaValor) {
    return (pesoValor / (alturaValor * alturaValor)).toFixed(2);
  }

  // Função para determinar a categoria do IMC
  function calcularImc(resultado) {
    if (resultado < 18.5) {
      return "Abaixo do peso";
    } else if (resultado >= 18.5 && resultado < 25) {
      return "Peso normal";
    } else if (resultado >= 25 && resultado < 30) {
      return "Sobrepeso";
    } else if (resultado >= 30 && resultado < 35) {
      return "Obesidade grau I";
    } else if (resultado >= 35 && resultado < 40) {
      return "Obesidade grau II (severa)";
    } else {
      return "Obesidade grau III (mórbida)";
    }
  }

  // Função para lidar com o evento do formulário
  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = document.querySelector(".peso1");
    const altura = document.querySelector(".altura");

    const pesoValor = Number(peso.value);
    const alturaValor = Number(altura.value);

    const imcResultado = calculaImc(pesoValor, alturaValor);
    const categoria = calcularImc(imcResultado);

    // Atualizando o DOM com o IMC calculado e a categoria na mesma linha
    resultadoImc.innerHTML = `<p>IMC: ${imcResultado} - Categoria: ${categoria}</p>`;

    // Tornando a div visível
    resultadoImc.classList.add("mostrar");

    // Removendo a classe "mostrar" após 5 segundos (5000 milissegundos)
    setTimeout(() => {
      resultadoImc.classList.remove("mostrar");
    }, 5000); // 5000ms = 5 segundos

    // Resetando o formulário
    form.reset();
  }

  // Adicionando o evento ao formulário
  form.addEventListener("submit", recebeEventoForm);
}

imc();
