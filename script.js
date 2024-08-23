// Validação de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'senha') {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('menu-container').classList.remove('hidden');
    } else {
        alert('Usuário ou senha inválidos!');
    }
});

// Botão de Logout no menu e formulário
function logout() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('register-bet-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}

// Navegação para o formulário de Registrar Bet
    document.getElementById('register-bet').addEventListener('click', function() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('register-bet-form').classList.remove('hidden');
});


// Botão de Voltar para o Menu Principal
    document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('register-bet-form').classList.add('hidden');
    document.getElementById('menu-container').classList.remove('hidden');
});


// Manipulação do formulário de Registrar Bet
    document.getElementById('bet-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coletar dados do formulário
    const liga = document.getElementById('liga').value;
    const partida = document.getElementById('partida').value;
    const tipoEntrada = document.getElementById('tipoEntrada').value;
    const valor = document.getElementById('valor').value;
    const status = document.getElementById('status').value;

    // Aqui, você pode fazer a integração com o banco de dados para salvar os dados
    
    // Exemplo: alert com os dados (isso seria substituído pela lógica de salvar)
    alert(`Bet registrada: ${liga}, ${partida}, ${tipoEntrada}, R$${valor}, Status: ${status}`);

    // Limpar o formulário após o envio
    document.getElementById('bet-form').reset();
});
