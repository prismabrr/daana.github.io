let cart = [];
let cartOpen = false;

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartOpen = !cartOpen;
    cartSidebar.classList.toggle('open', cartOpen);
}

function addToCart(name, price, code) {
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push({ name, price, code, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const total = item.price * item.quantity;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            
            <td>${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-controls">
                    <button onclick="changeQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
            </td>
            <td>${total.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart('${item.name}')">Remover</button></td>
        `;
        cartItems.appendChild(row);
    });

    // Atualizar o valor total
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="4">Total:</td>
        <td>${cartTotal}</td>
    `;
    cartItems.appendChild(totalRow);
}

function changeQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function finalizeCart() {
    const cartDetails = cart.map(item => `${item.name} ----${item.code} ------------ ${item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    const message = `Itens do carrinho:\n${cartDetails}\nTotal: ${total}\n\nContato via WhatsApp: https://wa.me/5579996004918`;

    // Redireciona para o WhatsApp com as informações do carrinho
    window.open(`https://wa.me/5579996004918?text=${encodeURIComponent(message)}`);
}
