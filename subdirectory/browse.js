
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

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("share-recipe");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        let author = form.elements[0].value;
        let recipe = form.elements[1].value;
        let description = form.elements[2].value;
        let imgsrc = form.elements[3].value;
        let protein = form.elements[4].value;
        let culture = form.elements[5].value;
        let meal = form.elements[6].value;
        
        addRecipe(author, recipe, protein, culture, meal, imgsrc, description);

        form.reset();
    });
});



/* Template Card
<div class="recipe-card" data-protein="pork" data-culture="italian" data-meal="entree">
    <img src="../images/RecipeCards/SpaghettiCarbonara.jpg" alt="Recipe 1" class="recipe-img">
    <h3 class="recipe-title">Spaghetti Carbonara</h3>
    <p class="recipe-creator">By: John Doe</p>
    <div class="recipe-tags">
        <span class="tag protein-tag">Pork</span>
        <span class="tag culture-tag">Italian</span>
        <span class="tag meal-tag">Entree</span>
    </div>
    <button class="save-btn">Save Recipe</button>
</div> */

function addRecipe(author, recipe, protein, culture, meal, imgsrc, description) {
    // Create parent recipe-card div
    let newDiv = document.createElement("div");
    newDiv.className = "recipe-card";
    newDiv.setAttribute("data-protein", protein.toLowerCase());
    newDiv.setAttribute("data-culture", culture.toLowerCase());
    newDiv.setAttribute("data-meal", meal.toLowerCase());

    
    // Create the image
    let img = document.createElement("img");
    img.className = "recipe-img";
    img.src = imgsrc;
    img.alt = description;

    // Create Recipe Title header
    let title = document.createElement("h3");
    title.className = "recipe-title";
    title.textContent = recipe;

    let creator = document.createElement("p");
    creator.className = "recipe-creator";
    creator.textContent = "By: " + author;

    let insideDiv = document.createElement("div");
    insideDiv.className = "recipe-tags";

    console.log(protein);

    let span1 = document.createElement("span");
    span1.className = "tag";
    span1.classList.add("protein-tag");
    span1.textContent = protein;

    let span2 = document.createElement("span");
    span2.className = "tag";
    span2.classList.add("culture-tag");
    span2.textContent = culture;

    let span3 = document.createElement("span");
    span3.className = "tag";
    span3.classList.add("meal-tag");
    span3.textContent = meal;

    insideDiv.appendChild(span1);
    insideDiv.appendChild(span2);
    insideDiv.appendChild(span3);

    let newButton = document.createElement("button");
    newButton.className = "save-btn";
    newButton.textContent = "Save Recipe";

    newDiv.appendChild(img);
    newDiv.appendChild(title);
    newDiv.appendChild(creator);
    newDiv.appendChild(insideDiv);
    newDiv.appendChild(newButton);

    let grid = document.getElementById("recipe-grid");
    grid.appendChild(newDiv);

}



