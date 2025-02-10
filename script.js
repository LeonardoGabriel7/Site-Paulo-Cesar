// Função para alternar o menu
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  }




  // Função para abrir o modal com detalhes do produto
function verMais(id) {
  const modal = document.getElementById('modal');
  const titulo = document.getElementById('modal-titulo');
  const imagem = document.getElementById('modal-imagem');
  const descricao = document.getElementById('modal-descricao');
  const preco = document.getElementById('modal-preco');

  // Exemplo de dados dos produtos (pode ser substituído por dados dinâmicos)
  const produtos = [
      { titulo: "Camisa 1", imagem: "camisa1.jpg", descricao: "Descrição da Camisa 1.", preco: "R$ 10,00" },
      { titulo: "Camisa 2", imagem: "camisa2.jpg", descricao: "Descrição da Camisa 2.", preco: "R$ 55,00" },
      { titulo: "Camisa 3", imagem: "camisa3.jpg", descricao: "Descrição da Camisa 3.", preco: "R$ 60,00" },
      { titulo: "Camisa 4", imagem: "camisa4.jpg", descricao: "Descrição da Camisa 4.", preco: "R$ 65,00" },
      { titulo: "Camisa 5", imagem: "camisa5.jpg", descricao: "Descrição da Camisa 5.", preco: "R$ 70,00" },
      { titulo: "Camisa 6", imagem: "camisa6.jpg", descricao: "Descrição da Camisa 6.", preco: "R$ 75,00" }
  ];

 

  // Exibe o modal
  modal.style.display = "block";
}



document.querySelectorAll('.zoom-container img').forEach(img => {
  img.addEventListener('mousemove', function (e) {
      const width = this.offsetWidth;
      const height = this.offsetHeight;
      const x = e.offsetX;
      const y = e.offsetY;
      
      const moveX = (x / width) * 100;
      const moveY = (y / height) * 100;
      
      this.style.transformOrigin = `${moveX}% ${moveY}%`;
  });
});




// Função para trocar entre as imagens (frente e verso)
function trocarImagem(botao, direcao) {
  const container = botao.closest('.imagem-container');
  const imagemPrincipal = container.querySelector('.imagem-principal');
  const imagemVerso = container.querySelector('.imagem-verso');

  if (direcao === 1) {
    // Mostra o verso
    imagemPrincipal.style.display = 'none';
    imagemVerso.style.display = 'block';
  } else {
    // Mostra a frente
    imagemPrincipal.style.display = 'block';
    imagemVerso.style.display = 'none';
  }
}





// descer devagar na parte sobre

// Rolagem suave para links internos
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Verifica se o link é interno (começa com #)
      if (targetId.startsWith('#')) {
          e.preventDefault(); // Impede o comportamento padrão apenas para links internos

          const targetSection = document.querySelector(targetId); // Seleciona a seção

          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth', // Rolagem suave
                  block: 'start'     // Alinha o topo da seção com o topo da viewport
              });
          }
      }
      // Links externos (como Instagram, YouTube e WhatsApp) funcionam normalmente
  });
});