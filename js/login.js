// Define o ano atual no rodapé (se houver o elemento com esse ID)
const anoElemento = document.getElementById('ano-tual');
if (anoElemento) {
    anoElemento.textContent = new Date().getFullYear();
}

// Lógica do Olho (Mostrar/Ocultar Senha)
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#inputPassword3');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Alterna o ícone
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

// Lógica de Validação
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    const email = document.querySelector('#inputEmail3').value;
    const senha = document.querySelector('#inputPassword3').value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        event.preventDefault(); // Impede o envio se estiver vazio
    } else {
        console.log("Formulário validado com sucesso!");
    }
});



// MODAL

 function abrirModalCadastro(event) {
    // Impede que o link tente mudar de página
    event.preventDefault(); 

    const modalElement = document.getElementById('modalCadastro');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    fetch('cadastro.html')
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const conteudo = doc.querySelector('.cadastro_main').innerHTML; 
        document.getElementById('conteudoCadastro').innerHTML = conteudo;
      })
      .catch(err => {
        document.getElementById('conteudoCadastro').innerHTML = "<p class='p-3 text-danger'>Erro ao carregar o formulário.</p>";
      });
  }