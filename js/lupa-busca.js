 // Função para exibir/esconder a barra de busca flutuante
 function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
        searchInput.focus();  // Coloca o cursor na barra de busca
    } else {
        searchInput.style.display = "none";
    }
}

// Função de busca de produtos (filtra os cards)
function searchProduct() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('box');
    
    for (let i = 0; i < cards.length; i++) {
        let productName = cards[i].getElementsByTagName('h5')[0].innerText.toLowerCase();
        if (productName.includes(input)) {
            cards[i].parentElement.style.display = '';  // Mostra o card
        } else {
            cards[i].parentElement.style.display = 'none';  // Oculta o card
        }
    }
}

// Exemplo de função para adicionar ao carrinho (não implementado)
function addToCart(productName, price, code) {
    alert("Produto " + productName + " adicionado ao carrinho!");
}