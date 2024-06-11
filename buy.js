function increment(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    element.innerText = value + 1;
    updateSummary();
}

function decrement(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    if (value > 0) {
        element.innerText = value - 1;
        updateSummary();
    }
}

function updateSummary() {
    let totalQuantity = 0;
    let totalPrice = 0;

    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

    orderItems.forEach(item => {
        const quantity = parseInt(document.getElementById(item.id).innerText);
        item.quantity = quantity;
        totalQuantity += quantity;
        totalPrice += item.price * quantity;
    });

    localStorage.setItem('orderItems', JSON.stringify(orderItems));

    document.getElementById('total-quantity').textContent = `จำนวนรวม: ${totalQuantity}`;
    document.getElementById('total-price').textContent = `ราคารวม: ${totalPrice}฿`;
}

function renderOrderItems() {
    const orderItemsContainer = document.getElementById('order-items');
    let totalQuantity = 0;
    let totalPrice = 0;

    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

    orderItems.forEach(item => {
        const orderItemElement = document.createElement('div');
        orderItemElement.classList.add('order-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('order-item-details');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('order-item-price');
        itemPrice.textContent = `${item.price}฿`;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = () => decrement(item.id);

        const quantitySpan = document.createElement('span');
        quantitySpan.id = item.id;
        quantitySpan.textContent = item.quantity;

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = () => increment(item.id);

        quantityControls.appendChild(decrementButton);
        quantityControls.appendChild(quantitySpan);
        quantityControls.appendChild(incrementButton);

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(quantityControls);

        orderItemElement.appendChild(itemImage);
        orderItemElement.appendChild(itemDetails);

        orderItemsContainer.appendChild(orderItemElement);

        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-quantity').textContent = `จำนวนรวม: ${totalQuantity}`;
    document.getElementById('total-price').textContent = `ราคารวม: ${totalPrice}฿`;
}

function confirmOrder() {
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

    const hasZeroQuantity = orderItems.some(item => item.quantity === 0);

    if (hasZeroQuantity) {
        document.getElementById('alert').style.display = 'block';
        setTimeout(() => {
            document.getElementById('alert').style.display = 'none';
        }, 3000);
    } else {
        window.location.href = 'confirm.html';
    }
}

document.addEventListener('DOMContentLoaded', renderOrderItems);
