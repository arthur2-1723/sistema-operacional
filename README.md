### Sistema Operacional
<p>É Apenas Um Sistema Operacional Simples</p>
<p>Senha computador: 1590</p>
<div><!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema Operacional Simples</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="telaBloqueio" style="display: block;">
        <h1>Tela de Bloqueio</h1>
        <input type="password" id="senha" placeholder="Digite sua senha">
        <button onclick="desbloquear()">Desbloquear</button>
    </div>

    <div id="areaDeTrabalho" style="display: none;">
        <h1>Área de Trabalho</h1>
        <div class="icone" onclick="abrirLoja()">Loja</div>
        <div class="icone" onclick="abrirExplorador()">Explorador de Arquivos</div>
        <div class="icone" onclick="abrirAplicativo1()">Aplicativo 1</div>
        <div class="icone" onclick="abrirAplicativo2()">Aplicativo 2</div>
   <div id="calculadora" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; width: 300px; padding: 20px; background-color: #fff; border: 1px solid #ccc; border-radius: 5px;">
    <h1>Calculadora</h1>
    <input type="text" id="display" placeholder="0">
    <div class="teclas">
        <div class="linha">
            <button onclick="digitar('7')">7</button>
            <button onclick="digitar('8')">8</button>
            <button onclick="digitar('9')">9</button>
            <button onclick="operacao('+')">+</button>
        </div>
        <div class="linha">
            <button onclick="digitar('4')">4</button>
            <button onclick="digitar('5')">5</button>
            <button onclick="digitar('6')">6</button>
            <button onclick="operacao('-')">-</button>
        </div>
        <div class="linha">
            <button onclick="digitar('1')">1</button>
            <button onclick="digitar('2')">2</button>
            <button onclick="digitar('3')">3</button>
            <button onclick="operacao('*')">*</button>
        </div>
        <div class="linha">
            <button onclick="digitar('0')">0</button>
            <button onclick="digitar('.')">.</button>
            <button onclick="igualar()">=</button>
            <button onclick="limpar()">C</button>
        </div>
    </div>
</div>
   
      <div id="relogio" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
    <span id="hora"></span>
</div>

        <button onclick="desligar()">Desligar</button>
    </div>

    <div id="loja" style="display: none;">
        <h1>Loja Simples</h1>
        <div class="produto">
            <img src="produto1.jpg" alt="Produto 1">
            <p>Nome do Produto 1</p>
            <button onclick="comprarProduto1()">Comprar</button>
        </div>
        <div class="produto">
            <img src="produto2.jpg" alt="Produto 2">
            <p>Nome do Produto 2</p>
            <button onclick="comprarProduto2()">Comprar</button>
        </div>
        <button onclick="voltarAreaTrabalho()">Voltar</button>
    </div>

    <div id="explorador" style="display: none;">
        <h1>Explorador de Arquivos</h1>
        <div id="arquivos">
            </div>
        <button onclick="voltarAreaTrabalho()">Voltar</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
</div>
