function exibirMensagem() {
    document.getElementById("mensagem").style.display = "block";
}

function fecharMensagem() {
    document.getElementById("mensagem").style.display = "none";
}

function enviarEmail() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    document.getElementById("mensagem").innerHTML = `
        <p>Siga as instruções enviadas para o seu e-mail (${email}) para redefinir sua senha.</p>
        <button onclick="fecharMensagem()">Fechar</button>
    `;
}

// Registrar
function mostrarMensagem() {
     // Obtem os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email-registro").value.trim();
    const senha = document.getElementById("senha-registro").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
            return; 
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // objeto para o novo usuário
    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha 
    };

    // novo usuário
    usuarios.push(novoUsuario);

    // Salva a lista atualizada de volta no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));



    // 7. Se os campos estiverem preenchidos, exibe a mensagem de sucesso
    document.getElementById("mensagem").style.display = "block";
    document.querySelector('.second-column').style.display = "none";
}
// Login

function fazerLogin() {
    //coleta os valores e validar usuario
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === emailDigitado);
    
    if (usuarioEncontrado && usuarioEncontrado.senha === senhaDigitada) {
        exibirLoginSucesso(usuarioEncontrado.nome);
    } else {
        alert("E-mail ou senha incorretos!");
    }
}
    // Login bem sucessedido
function exibirLoginSucesso(nomeDoUsuario) {
    document.querySelector('.content').style.display = 'none';
    
    const mensagemDiv = document.getElementById('mensagem-sucesso');
    const textoP = document.getElementById('texto-sucesso');

    textoP.textContent = `Olá, ${nomeDoUsuario}! Login bem-sucedido.`;

    mensagemDiv.style.display = 'block';
}
