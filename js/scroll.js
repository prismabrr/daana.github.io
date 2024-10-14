// Mostrar o botão quando rolar para baixo
window.onscroll = function() {
  let btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Função para rolar até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
