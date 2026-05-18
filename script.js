// Get Elements From HTML
const addOrderBtn = document.getElementById("addOrderBtn");

const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const date = document.getElementById("date");

const ordersTableBody = document.getElementById("ordersTableBody");

const totalRevenue = document.getElementById("totalRevenue");
const totalOrders = document.getElementById("totalOrders");
const totalProducts = document.getElementById("totalProducts");

// Array To Store Orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

/* Add Order */
addOrderBtn.addEventListener("click", () => {

    const order = {
        product: productName.value,
        category: category.value,
        price: Number(price.value),
        quantity: Number(quantity.value),
        date: date.value
    };

    // Add Order To Array
    orders.push(order);

    // Save Data
    localStorage.setItem("orders", JSON.stringify(orders));

    // Display Data
    displayOrders();

    // Clear Inputs
    clearInputs();
});

/* Display Orders */
function displayOrders(){

    ordersTableBody.innerHTML = "";

    let revenue = 0;
    let productsCount = 0;

    orders.forEach(order => {

        revenue += order.price * order.quantity;
        productsCount += order.quantity;

        ordersTableBody.innerHTML += `
            <tr>
                <td>${order.product}</td>
                <td>${order.category}</td>
                <td>${order.price} EGP</td>
                <td>${order.quantity}</td>
                <td>${order.date}</td>
            </tr>
        `;
    });

    // Update KPI Cards
    totalRevenue.innerText = revenue + " EGP";
    totalOrders.innerText = orders.length;
    totalProducts.innerText = productsCount;
}

/* Clear Inputs */
function clearInputs(){

    productName.value = "";
    category.value = "";
    price.value = "";
    quantity.value = "";
    date.value = "";
}

/* Start App */
displayOrders();