function increment(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    element.innerText = value + 1;
}

function decrement(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    if (value > 0) {
        element.innerText = value - 1;
    }
}

function goToBuyPage() {
const items = [
{ id: 'item1', name: 'ครัวซอง', price: 25, image: 'image/bread/bread1.jpg' },
{ id: 'item2', name: 'ขนมปังใส้กรอก', price: 20, image: 'image/bread/bread2.jpg' },
{ id: 'item3', name: 'โรลแฮม', price: 20, image: 'image/bread/bread3.jpg' },
{ id: 'item4', name: 'เบอเกอไก่สับไข่เค็ม', price: 25, image: 'image/bread/bread4.jpg' },
{ id: 'item5', name: 'เค้กเนยสดลายหินอ่อน', price: 30, image: 'image/cake/cake1.jpg' },
{ id: 'item6', name: 'เค้กเนยสด', price: 25, image: 'image/cake/cake2.jpg' },
{ id: 'item7', name: 'เค้กกล้วยหอม', price: 20, image: 'image/cake/cake3.jpg' },
{ id: 'item8', name: 'เดนิชฟรุ๊ต', price: 30, image: 'image/cake/cake4.jpg' }
];

const selectedItems = items
.map(item => {
    const quantity = parseInt(document.getElementById(item.id).innerText);
    return { ...item, quantity };
})
.filter(item => item.quantity > 0);

if (selectedItems.length === 0) {
document.getElementById('alert').style.display = 'block';
setTimeout(() => {
    document.getElementById('alert').style.display = 'none';
}, 3000);
} else {
localStorage.setItem('orderItems', JSON.stringify(selectedItems));
window.location.href = 'buy.html';
}
}
