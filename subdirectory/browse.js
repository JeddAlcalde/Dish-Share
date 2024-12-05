
// Once our window is loaded, we add the event listener for our post form
window.onload = () => {
    document.getElementById("protein-tag").addEventListener("change", filterRecipes);
    document.getElementById("culture-tag").addEventListener("change", filterRecipes);
    document.getElementById("meal-tag").addEventListener("change", filterRecipes);
 };



 function filterRecipes() {

    var proteinFilter = document.getElementById("protein-tag");
    var cultureFilter = document.getElementById("culture-tag");
    var mealFilter = document.getElementById("meal-tag");

    var proteinValue = proteinFilter.value;
    var cultureValue = cultureFilter.value;
    var mealValue = mealFilter.value;

    recipeCards = document.querySelectorAll(".recipe-card");

    // Iterate through each recipe card and toggle visibility
    recipeCards.forEach(card => {
        let proteinMatch = false;
        let cultureMatch = false;
        let mealMatch = false;

        // Check each category against the selected filter values
        let cardProteinValue = card.dataset.protein;  
        let cardCultureValue = card.dataset.culture;
        let cardMealValue = card.dataset.meal
        if (cardProteinValue == proteinValue || proteinValue === "") proteinMatch = true;
        if (cardCultureValue == cultureValue || cultureValue === "") cultureMatch = true;
        if (cardMealValue == mealValue || mealValue === "") mealMatch = true;

        // Show the card if all conditions are true, otherwise hide it
        if (proteinMatch && cultureMatch && mealMatch) {
            card.classList.remove("hidden"); 
        } else {
            card.classList.add("hidden");
            
        }
    });
}



