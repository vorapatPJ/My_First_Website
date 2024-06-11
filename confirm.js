function showQR() {
    document.getElementById('payment-frame').src = 'qr.html';
}

function showCard() {
    document.getElementById('payment-frame').src = 'card.html';
}

document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('ขอบคุณครับ');
});
