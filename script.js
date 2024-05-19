function abrirAplicativo1() {
    alert('Abrindo Aplicativo 1...');
}

function abrirAplicativo2() {
    alert('Abrindo Aplicativo 2...');
}

function desligar() {
    if (confirm('Deseja realmente desligar?')) {
        alert('Sistema desligado.');
        window.location.reload();
      
    }
}

function abrirNavegador() {
    document.getElementById('areaDeTrabalho').style.display = 'none';
    document.getElementById('navegador').style.display = 'block';
}

function buscarPagina() {
    // Função de buscar página (já existente)
}

function voltarAreaTrabalho() {
    document.getElementById('areaDeTrabalho').style.display = 'block';
    document.getElementById('navegador').style.display = 'none';
}

// Funções existentes (fazerLogin, abrirAplicativo1, abrirAplicativo2, desligar, abrirNavegador, buscarPagina, voltarAreaTrabalho)

function abrirExplorador() {
    // Carregar arquivos (função a ser implementada)
    exibirArquivos();
    document.getElementById('areaDeTrabalho').style.display = 'none';
    document.getElementById('explorador').style.display = 'block';
}

function exibirArquivos() {
    const arquivos = ['arquivo1.txt', 'arquivo2.pdf', 'imagem.jpg']; // Lista de arquivos simulados
    const containerArquivos = document.getElementById('arquivos');

    containerArquivos.innerHTML = ''; // Limpa o conteúdo anterior

    arquivos.forEach(arquivo => {
        const divArquivo = document.createElement('div');
        divArquivo.classList.add('arquivo');
        divArquivo.textContent = arquivo; // Nome do arquivo
        divArquivo.onclick = () => abrirArquivo(arquivo); // Função para abrir o arquivo (a ser implementada)
        containerArquivos.appendChild(divArquivo);
    });
}

function abrirArquivo(arquivo) {
    alert('Abrindo arquivo: ' + arquivo); // Simulação de abrir o arquivo
  window.location.href = "https://www.google.com";
}

// Funções existentes (fazerLogin, abrirAplicativo1, abrirAplicativo2, desligar, abrirNavegador, buscarPagina, voltarAreaTrabalho)

function desbloquear() {
    const senhaDigitada = document.getElementById('senha').value;

    if (senhaDigitada === '1590') { // Senha de exemplo
        document.getElementById('telaBloqueio').style.display = 'none';
        document.getElementById('areaDeTrabalho').style.display = 'block';
    } else {
        alert('Senha incorreta!');
    }
}

function abrirLoja() {
    document.getElementById('areaDeTrabalho').style.display = 'none';
    document.getElementById('loja').style.display = 'block';
}

function comprarProduto1() {
    alert('Produto 1 adicionado ao carrinho!'); // Simulação de compra
}

function comprarProduto2() {
    alert('Produto 2 adicionado ao carrinho!'); // Simulação de compra
}

function voltarAreaTrabalho() {
    document.getElementById('loja').style.display = 'none';
    document.getElementById('areaDeTrabalho').style.display = 'block';
}

function atualizarRelogio() {
    const data = new Date();
    const hora = data.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    document.getElementById('hora').textContent = hora;
    setTimeout(atualizarRelogio, 1000); // Atualiza a cada segundo
}

window.onload = atualizarRelogio;

let display = document.getElementById('display');
let valorAnterior = null;
let operacao

    function abrircalculadora(){
      document.getElementById('areaDeTrabalho').style.display = 'none';
      
      document.getElementById('calculadora').style.display = 'block';
      document.getElementById('hora').style.display = 'none';
    }
function voltarcalc() {
  document.getElementById('calculadora').style.display = 'none';
  
  document.getElementById('areaDeTrabalho')
}

function naoenc() {
  document.getElementById('naoenc').style.display = 'block'
  
  document.getElementById('areaDeTrabalho').style.display = 'none';
}

function voltarnaoenc() {
  document.getElementById('naoenc').style.display = 'none';
  
  document.getElementById('areaDeTrabalho').style.display = 'block'
 }

function criarCalculadora() {
  // Variables and HTML elements
  const display = document.getElementById('display');
  let valorAnterior = null;
  let operacaoPendente = null;

  // Function to handle digit input
  function digitar(numero) {
  if (typeof numero !== 'string' || !numero.match(/^[0-9]$/)) {
    // Handle invalid input (not a digit)
    console.error(`Invalid input: "${numero}". Only digits are allowed.`);
    return;
  }

  display.value += numero;
}


  // Function to handle operations (+, -, *, =)
  function operacao(op) {
    if (valorAnterior === null) {
      valorAnterior = parseFloat(display.value);
      display.value = "";
    } else {
      calcularResultado();
      valorAnterior = parseFloat(display.value);
      display.value = "";
    }
    operacaoPendente = op;
  }

  // Function to calculate the result
  function calcularResultado() {
    const valorAtual = parseFloat(display.value);
    let resultado;

    switch (operacaoPendente) {
      case '+':
        resultado = valorAnterior + valorAtual;
        break;
      case '-':
        resultado = valorAnterior - valorAtual;
        break;
      case '*':
        resultado = valorAnterior * valorAtual;
        break;
      // Add other cases for operations like division, etc.
    }

    display.value = resultado;
    valorAnterior = null;
    operacaoPendente = null;
  }

  // Function to clear the display
  function limpar() {
    display.value = "";
    valorAnterior = null;
    operacaoPendente = null;
  }

  // Function to handle the equal button (=)
  function igualar() {
    calcularResultado();
  }

  // Bind functions to calculator buttons
  const botoesDigitos = document.querySelectorAll('.teclas .linha button[data-tipo="numero"]');
  const botoesOperacoes = document.querySelectorAll('.teclas .linha button[data-tipo="operacao"]');
  const botaoLimpar = document.querySelector('.teclas .linha button[data-tipo="limpar"]');
  const botaoIgualar = document.querySelector('.teclas .linha button[data-tipo="igualar"]');

  botoesDigitos.forEach(botao => botao.addEventListener('click', () => digitar(botao.value)));
  botoesOperacoes.forEach(botao => botao.addEventListener('click', () => operacao(botao.value)));
  botaoLimpar.addEventListener('click', limpar);
  botaoIgualar.addEventListener('click', igualar);
}
