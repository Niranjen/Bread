/*
    Bread Recipe Calculator

    Each recipe below represents the ingredient quantities
    required to make ONE loaf.

    GENERAL FORMULA:

    newQuantity =
        originalQuantity *
        (desiredNumberOfLoaves / originalNumberOfLoaves)

    Because our original recipes make one loaf:

    originalNumberOfLoaves = 1

    Therefore:

    newQuantity =
        originalQuantity * desiredNumberOfLoaves
*/


/*
    Stores all bread recipes.

    Each bread contains:

    name
        Name displayed to the user.

    description
        Short explanation of the bread.

    ingredients
        Array containing each ingredient.

    instructions
        Steps used to make the bread.
*/
const breadRecipes = {

    /*
        WHITE BREAD
        Base recipe = 1 loaf.
    */
    white: {

        name: "White Bread",

        description:
            "A simple soft white bread suitable for sandwiches and toast.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "g"
            },

            {
                name: "Water",
                amount: 320,
                unit: "ml"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "g"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "g"
            },

            {
                name: "Sugar",
                amount: 20,
                unit: "g"
            },

            {
                name: "Butter",
                amount: 30,
                unit: "g"
            }

        ],

        instructions: [

            "Combine the flour, yeast, sugar and salt in a large mixing bowl.",

            "Add the water and mix until a rough dough forms.",

            "Add the butter and knead the dough until smooth and elastic.",

            "Cover the dough and allow it to rise until approximately doubled in size.",

            "Shape the dough and place it into a loaf tin.",

            "Allow the dough to rise again.",

            "Bake at approximately 190°C until golden brown and cooked through.",

            "Allow the bread to cool before slicing."

        ]
    },


    /*
        WHOLE WHEAT BREAD
        Base recipe = 1 loaf.
    */
    wholeWheat: {

        name: "Whole Wheat Bread",

        description:
            "A heartier bread made using a combination of whole wheat and bread flour.",

        ingredients: [

            {
                name: "Whole Wheat Flour",
                amount: 350,
                unit: "g"
            },

            {
                name: "Bread Flour",
                amount: 150,
                unit: "g"
            },

            {
                name: "Water",
                amount: 350,
                unit: "ml"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "g"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "g"
            },

            {
                name: "Honey",
                amount: 25,
                unit: "g"
            },

            {
                name: "Olive Oil",
                amount: 25,
                unit: "ml"
            }

        ],

        instructions: [

            "Combine the whole wheat flour, bread flour, yeast and salt.",

            "Add the water, honey and olive oil.",

            "Mix until a dough forms.",

            "Knead until the dough becomes smooth and elastic.",

            "Cover and allow the dough to rise until doubled in size.",

            "Shape the dough and place it into a loaf tin.",

            "Allow the dough to complete its second rise.",

            "Bake at approximately 190°C until cooked through."

        ]
    },


    /*
        SOURDOUGH
        Base recipe = 1 loaf.
    */
    sourdough: {

        name: "Sourdough",

        description:
            "A naturally fermented bread made using an active sourdough starter.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "g"
            },

            {
                name: "Water",
                amount: 350,
                unit: "ml"
            },

            {
                name: "Active Sourdough Starter",
                amount: 100,
                unit: "g"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "g"
            }

        ],

        instructions: [

            "Mix the flour and water together and allow the mixture to rest.",

            "Add the active sourdough starter and salt.",

            "Mix thoroughly until combined.",

            "Perform several stretch-and-fold cycles during the first part of fermentation.",

            "Allow the dough to bulk ferment.",

            "Shape the dough into a loaf.",

            "Allow the shaped dough to proof.",

            "Bake in a preheated oven until the crust is deeply browned."

        ]
    },


    /*
        BRIOCHE
        Base recipe = 1 loaf.
    */
    brioche: {

        name: "Brioche",

        description:
            "A rich French-style bread containing butter, eggs and milk.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "g"
            },

            {
                name: "Milk",
                amount: 100,
                unit: "ml"
            },

            {
                name: "Eggs",
                amount: 4,
                unit: ""
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "g"
            },

            {
                name: "Sugar",
                amount: 60,
                unit: "g"
            },

            {
                name: "Salt",
                amount: 8,
                unit: "g"
            },

            {
                name: "Butter",
                amount: 200,
                unit: "g"
            }

        ],

        instructions: [

            "Combine the flour, yeast, sugar and salt.",

            "Add the milk and eggs.",

            "Mix until a dough begins to develop.",

            "Gradually add softened butter while kneading.",

            "Continue kneading until the dough becomes smooth and elastic.",

            "Cover and allow the dough to rise.",

            "Shape the dough and place it into a loaf tin.",

            "Allow it to rise again before baking.",

            "Bake at approximately 180°C until golden brown."

        ]
    },


    /*
        FOCACCIA
        Base recipe = approximately one tray.
        For simplicity the calculator treats one tray as one loaf/unit.
    */
    focaccia: {

        name: "Focaccia",

        description:
            "A soft Italian-style flat bread with olive oil and a crisp surface.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "g"
            },

            {
                name: "Water",
                amount: 400,
                unit: "ml"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "g"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "g"
            },

            {
                name: "Olive Oil",
                amount: 40,
                unit: "ml"
            }

        ],

        instructions: [

            "Combine the flour, yeast and salt.",

            "Add the water and olive oil.",

            "Mix until a wet dough forms.",

            "Cover the dough and allow it to rise.",

            "Transfer the dough into an oiled baking tray.",

            "Stretch the dough carefully to fill the tray.",

            "Allow it to rise again.",

            "Press dimples into the surface using your fingers.",

            "Drizzle additional olive oil over the surface if desired.",

            "Bake at approximately 220°C until golden brown."

        ]
    }

};


/*
    Gets the HTML elements that JavaScript needs to control.
*/
const breadTypeSelect =
    document.getElementById("breadType");

const quantityInput =
    document.getElementById("quantity");

const breadName =
    document.getElementById("breadName");

const breadDescription =
    document.getElementById("breadDescription");

const ingredientList =
    document.getElementById("ingredientList");

const instructionList =
    document.getElementById("instructionList");


/*
    Main function used to update the recipe.

    This function:

    1. Gets the selected bread.
    2. Gets the requested number of loaves.
    3. Updates the bread information.
    4. Scales every ingredient.
    5. Displays the instructions.
*/
function updateRecipe() {

    /*
        Gets the currently selected bread key.

        Examples:

        white
        sourdough
        brioche
    */
    const selectedBreadType =
        breadTypeSelect.value;


    /*
        Gets the full recipe object using the selected key.
    */
    const recipe =
        breadRecipes[selectedBreadType];


    /*
        Converts the input value into a number.
    */
    let numberOfLoaves =
        Number(quantityInput.value);


    /*
        Prevents zero, negative numbers or invalid input.
    */
    if (
        numberOfLoaves < 1 ||
        Number.isNaN(numberOfLoaves)
    ) {

        numberOfLoaves = 1;

        quantityInput.value = 1;
    }


    /*
        Updates the bread heading.
    */
    breadName.textContent =
        recipe.name;


    /*
        Updates the bread description.
    */
    breadDescription.textContent =
        recipe.description;


    /*
        Removes the previous ingredients before creating
        the updated ingredient list.
    */
    ingredientList.innerHTML = "";


    /*
        Goes through every ingredient in the selected recipe.
    */
    recipe.ingredients.forEach(function (ingredient) {

        /*
            GENERAL FORMULA:

            scaled quantity
            =
            original quantity
            ×
            desired number of loaves
            /
            original number of loaves


            Because the base recipe is for one loaf:

            original number of loaves = 1

            Therefore:

            scaled quantity
            =
            original quantity × number of loaves
        */

        const scaledAmount =
            ingredient.amount * numberOfLoaves;


        /*
            Creates a new row for the ingredient.
        */
        const ingredientRow =
            document.createElement("div");


        /*
            Gives the row the CSS class "ingredient".
        */
        ingredientRow.classList.add("ingredient");


        /*
            Creates the ingredient name.
        */
        const ingredientName =
            document.createElement("span");


        ingredientName.classList.add(
            "ingredient-name"
        );


        ingredientName.textContent =
            ingredient.name;


        /*
            Creates the displayed quantity.
        */
        const ingredientQuantity =
            document.createElement("span");


        ingredientQuantity.classList.add(
            "ingredient-quantity"
        );


        /*
            Displays the calculated amount and unit.

            Example:

            1000 g
            640 ml
            8 eggs
        */
        ingredientQuantity.textContent =
            formatAmount(scaledAmount) +
            " " +
            ingredient.unit;


        /*
            Adds the name and quantity into the ingredient row.
        */
        ingredientRow.appendChild(
            ingredientName
        );


        ingredientRow.appendChild(
            ingredientQuantity
        );


        /*
            Adds the complete ingredient row to the webpage.
        */
        ingredientList.appendChild(
            ingredientRow
        );

    });


    /*
        Updates the instructions after updating the ingredients.
    */
    displayInstructions(recipe.instructions);
}


/*
    Displays the preparation instructions.
*/
function displayInstructions(instructions) {

    /*
        Clears instructions from the previous bread.
    */
    instructionList.innerHTML = "";


    /*
        Goes through every instruction.
    */
    instructions.forEach(function (instruction) {

        /*
            Creates an <li> element.
        */
        const listItem =
            document.createElement("li");


        /*
            Adds the instruction text.
        */
        listItem.textContent =
            instruction;


        /*
            Adds the instruction to the ordered list.
        */
        instructionList.appendChild(
            listItem
        );

    });
}


/*
    Formats ingredient numbers.

    For example:

    500     -> 500
    500.5   -> 500.5
    500.333 -> 500.33

    This prevents unnecessarily long decimal values.
*/
function formatAmount(amount) {

    /*
        Checks whether the number has no decimal component.
    */
    if (Number.isInteger(amount)) {

        return amount;
    }


    /*
        Otherwise display at most two decimal places.
    */
    return Number(amount.toFixed(2));
}


/*
    Runs updateRecipe() whenever the user
    selects a different bread.
*/
breadTypeSelect.addEventListener(
    "change",
    updateRecipe
);


/*
    Runs updateRecipe() whenever the user
    changes the number of loaves.

    Using "input" instead of "change" means the website
    updates immediately while the user changes the value.
*/
quantityInput.addEventListener(
    "input",
    updateRecipe
);


/*
    Displays the initial recipe when the webpage first loads.
*/
updateRecipe();