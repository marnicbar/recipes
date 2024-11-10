
document.addEventListener('DOMContentLoaded', function () {
    const servingsInput = document.getElementById('servings-input');
    const ingredientQuantities = document.querySelectorAll('.ingredient-quantity');
    const defaultServings = document.getElementById('recipe-ingredients').getAttribute('default-servings');

    function updateQuantities() {
        const servings = parseFloat(servingsInput.value);
        ingredientQuantities.forEach(function (quantityElement) {
            const baseQuantity = parseFloat(quantityElement.getAttribute('data-quantity'));
            quantityElement.textContent = (baseQuantity * servings / defaultServings).toLocaleString('de-DE', { useGrouping: false });
        });
    }

    servingsInput.addEventListener('input', updateQuantities);
});
