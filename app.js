// cart button increment/decrement function for both phone & casing

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // updating phone/casing total price

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calling calculateTotal function for calculating total products price

    calculateTotal()
}

// getting total input value of both cart & phone 

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

/* calculating final total price of both cart & phone according to their input value calling input value function */

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // updating subTotal in HTML

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone cart & price both increment calling function

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

// phone cart & price both decrement calling function

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// casing cart & price both increment calling function

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

// casing cart & price both decrement calling function

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});

