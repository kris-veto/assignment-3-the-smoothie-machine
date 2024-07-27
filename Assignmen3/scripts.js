document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button'); // Get the order button element
    
    orderButton.addEventListener('click', () => {
        // Capture form values
        const name = document.getElementById('name').value.trim();   // Get and trim the spaces from the name input value
        const base = document.getElementById('base').value;    // Get the selected base value
        const ingredients = Array.from(document.getElementById('ingredients').selectedOptions).map(option => option.value); // Get selected ingredients as an array
        const size = document.querySelector('input[name="size"]:checked').value;  // Get the selected size value

        // Create Smoothie object
        class Smoothie {
            constructor(name, base, ingredients, size, extraProtein) {
                this.name = name;
                this.base = base;
                this.ingredients = ingredients;
                this.size = size;
            }
             // Method to get a description of the smoothie
            getDescription() {
                return `Name: ${this.name} <br>
                        Base: ${this.base} <br>
                        Ingredients: ${this.ingredients.join(', ')} <br>
                        Size: ${this.size}`; 
            }
        }
        // Create a new Smoothie object
        const smoothie = new Smoothie(name, base, ingredients, size);

        // Display order summary
        const orderSummary = document.getElementById('order-summary');
        orderSummary.innerHTML = `<h2>Order Summary</h2>
                                  <p>${smoothie.getDescription()}</p>`;
    });
});