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

