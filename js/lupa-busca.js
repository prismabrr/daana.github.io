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

// Função de busca de produtos (filtra os cards e centraliza o card encontrado)
function searchProduct() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('box');
    let firstMatch = null; // Para armazenar o primeiro card correspondente
    
    for (let i = 0; i < cards.length; i++) {
        let productName = cards[i].getElementsByTagName('h5')[0].innerText.toLowerCase();
        if (productName.includes(input)) {
            cards[i].parentElement.style.display = '';  // Mostra o card
            if (!firstMatch) {
                firstMatch = cards[i]; // Armazena o primeiro card correspondente
            }
        } else {
            cards[i].parentElement.style.display = 'none';  // Oculta o card
        }
    }

    // Se houver correspondência, retorna o primeiro item encontrado
    return firstMatch; // Retorna o card correspondente
}

// Detecta quando a tecla Enter é pressionada
function handleEnter(event) {
    // Verifica se a tecla pressionada foi "Enter"
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que o formulário seja enviado
        
        // Realiza a busca do produto e armazena o card correspondente
        let firstMatch = searchProduct();
        
        // Se houver correspondência, rola até o card correspondente
        if (firstMatch) {
            setTimeout(() => {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300); // Adiciona um pequeno atraso para garantir o foco correto
        }
    }
}

// Exemplo de função para adicionar ao carrinho (não implementado)
function addToCart(productName, price, code) {
    alert("Produto " + productName + " adicionado ao carrinho!");
}