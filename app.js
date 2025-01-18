const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    {  id:4, name:"product 4", price:50}
];

let cart = [];

const productList = document.getElementById('product-list');
const cartDiv = document.getElementById('cart');


function displayProducts() {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>

            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);

    updateCart();
}

function updateCart() {
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;

        cartDiv.appendChild(cartItem);
    });
    const total = calculateTotal();
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total}</strong>`;

    cartDiv.appendChild(totalDiv);
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart before checking out.');
    } else {
        const total = calculateTotal();
        alert(`Thank you for your purchase! Your total is $${total}.`);
        cart = [];
        updateCart();
    }
});

displayProducts();