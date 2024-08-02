document.addEventListener('DOMContentLoaded', function() {
    const cartPage = document.getElementById('cartPage');
    const cartBackButton = document.getElementById('cartBackButton');
    
    // Event delegation for profile button click
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.footer-menu img[src="image/profile.svg"]')) {
            cartPage.classList.add('show');
        }
    });
    
    // Hide cart page when back button is clicked
    cartBackButton.addEventListener('click', () => {
        cartPage.classList.remove('show');
    });

    // Add cart items dynamically if needed
    function addItemToCart(item) {
        const cartContent = document.querySelector('.cart-content');
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
        `;
        cartContent.appendChild(itemElement);
        updateTotal();
    }

    function updateTotal() {
        const totalAmountElement = document.getElementById('totalAmount');
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').innerText.replace('R', ''));
            total += price;
        });
        totalAmountElement.innerText = `R${total.toFixed(2)}`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const cartPage = document.getElementById('cartPage');
    const cartBackButton = document.getElementById('cartBackButton');

    // Event delegation for profile button click
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('.footer-menu img[src="image/profile.svg"]')) {
            cartPage.classList.remove('hidden');
        }
    });

    // Back button click event
    cartBackButton.addEventListener('click', () => {
        cartPage.classList.add('hidden');
    });
});

