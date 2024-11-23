

document.addEventListener('DOMContentLoaded', function () {
    const servingsInput = document.getElementById('servings-input');
    const ingredientQuantities = document.querySelectorAll('.ingredient-quantity');
    const defaultServings = document.getElementById('recipe-ingredients').getAttribute('default-servings');
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");

    function updateQuantities() {
        const servings = parseFloat(servingsInput.value);
        ingredientQuantities.forEach(function (quantityElement) {
            const baseQuantity = parseFloat(quantityElement.getAttribute('data-quantity'));
            if (isNaN(baseQuantity)) {
                return;
            }
            quantityElement.textContent = (baseQuantity * servings / defaultServings).toLocaleString('de-DE', { useGrouping: false });
        });
    }
    servingsInput.addEventListener('input', updateQuantities);

    minusButton.addEventListener("click", () => {
        if (--servingsInput.value <= 1) {
            minusButton.disabled = true;
        };
        updateQuantities();
    });

    plusButton.addEventListener("click", () => {
        if (++servingsInput.value > 1) {
            minusButton.disabled = false;
        }
        updateQuantities();
    });
});

