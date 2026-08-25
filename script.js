/*
    ==========================================================
    BREAD RECIPE CALCULATOR
    ==========================================================


    GENERAL SCALING FORMULA:

                            desired number of loaves
    New Amount = Old Amount × -------------------------
                            original number of loaves


    Every recipe stored below makes ONE loaf.

    Therefore:

    New Amount = Old Amount × Number of Loaves
*/


/* ==========================================================
   RECIPES
   ========================================================== */

const breadRecipes = {


    /* ------------------------------------------------------
       WHITE BREAD
       ------------------------------------------------------ */

    white: {

        name: "White Bread",

        description:
            "A simple soft white bread suitable for sandwiches and toast.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "grams"
            },

            {
                name: "Water",
                amount: 320,
                unit: "millilitres"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "grams"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "grams"
            },

            {
                name: "Sugar",
                amount: 20,
                unit: "grams"
            },

            {
                name: "Butter",
                amount: 30,
                unit: "grams"
            }

        ],

        instructions: [

            "Combine the flour, yeast, sugar and salt in a large mixing bowl.",

            "Add the water and mix until a rough dough forms.",

            "Add the butter and knead until the dough becomes smooth and elastic.",

            "Cover the dough and allow it to rise until approximately doubled in size.",

            "Shape the dough and place it into a loaf tin.",

            "Allow the dough to rise again.",

            "Bake at approximately 190 degrees Celsius until golden brown.",

            "Allow the bread to cool before slicing."

        ]
    },


    /* ------------------------------------------------------
       WHOLE WHEAT
       ------------------------------------------------------ */

    wholeWheat: {

        name: "Whole Wheat Bread",

        description:
            "A hearty bread made using whole wheat and bread flour.",

        ingredients: [

            {
                name: "Whole Wheat Flour",
                amount: 350,
                unit: "grams"
            },

            {
                name: "Bread Flour",
                amount: 150,
                unit: "grams"
            },

            {
                name: "Water",
                amount: 350,
                unit: "millilitres"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "grams"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "grams"
            },

            {
                name: "Honey",
                amount: 25,
                unit: "grams"
            },

            {
                name: "Olive Oil",
                amount: 25,
                unit: "millilitres"
            }

        ],

        instructions: [

            "Combine the whole wheat flour, bread flour, yeast and salt.",

            "Add the water, honey and olive oil.",

            "Mix until a dough forms.",

            "Knead until smooth and elastic.",

            "Cover and allow the dough to rise until doubled in size.",

            "Shape the dough and place it into a loaf tin.",

            "Allow the dough to rise again.",

            "Bake at approximately 190 degrees Celsius."

        ]
    },


    /* ------------------------------------------------------
       SOURDOUGH
       ------------------------------------------------------ */

    sourdough: {

        name: "Sourdough",

        description:
            "A naturally fermented bread made using an active sourdough starter.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "grams"
            },

            {
                name: "Water",
                amount: 350,
                unit: "millilitres"
            },

            {
                name: "Active Sourdough Starter",
                amount: 100,
                unit: "grams"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "grams"
            }

        ],

        instructions: [

            "Mix the flour and water together and allow the mixture to rest.",

            "Add the active sourdough starter and salt.",

            "Mix thoroughly.",

            "Perform several stretch and fold cycles.",

            "Allow the dough to bulk ferment.",

            "Shape the dough into a loaf.",

            "Allow the shaped dough to proof.",

            "Bake until the crust is deeply browned."

        ]
    },


    /* ------------------------------------------------------
       BRIOCHE
       ------------------------------------------------------ */

    brioche: {

        name: "Brioche",

        description:
            "A rich French-style bread containing butter, eggs and milk.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "grams"
            },

            {
                name: "Milk",
                amount: 100,
                unit: "millilitres"
            },

            {
                name: "Eggs",
                amount: 4,
                unit: ""
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "grams"
            },

            {
                name: "Sugar",
                amount: 60,
                unit: "grams"
            },

            {
                name: "Salt",
                amount: 8,
                unit: "grams"
            },

            {
                name: "Butter",
                amount: 200,
                unit: "grams"
            }

        ],

        instructions: [

            "Combine the flour, yeast, sugar and salt.",

            "Add the milk and eggs.",

            "Mix until a dough begins to develop.",

            "Gradually add softened butter while kneading.",

            "Continue kneading until smooth and elastic.",

            "Cover and allow the dough to rise.",

            "Shape the dough and place it into a loaf tin.",

            "Allow it to rise again.",

            "Bake at approximately 180 degrees Celsius."

        ]
    },


    /* ------------------------------------------------------
       FOCACCIA
       ------------------------------------------------------ */

    focaccia: {

        name: "Focaccia",

        description:
            "A soft Italian-style flatbread containing olive oil.",

        ingredients: [

            {
                name: "Bread Flour",
                amount: 500,
                unit: "grams"
            },

            {
                name: "Water",
                amount: 400,
                unit: "millilitres"
            },

            {
                name: "Dry Yeast",
                amount: 7,
                unit: "grams"
            },

            {
                name: "Salt",
                amount: 10,
                unit: "grams"
            },

            {
                name: "Olive Oil",
                amount: 40,
                unit: "millilitres"
            }

        ],

        instructions: [

            "Combine the flour, yeast and salt.",

            "Add the water and olive oil.",

            "Mix until a wet dough forms.",

            "Cover the dough and allow it to rise.",

            "Transfer the dough into an oiled baking tray.",

            "Stretch the dough carefully to fill the tray.",

            "Allow the dough to rise again.",

            "Press dimples into the surface using your fingers.",

            "Drizzle olive oil over the surface if desired.",

            "Bake at approximately 220 degrees Celsius."

        ]
    }

};


/* ==========================================================
   GET HTML ELEMENTS
   ========================================================== */

const breadTypeSelect =
    document.getElementById("breadType");


const quantityInput =
    document.getElementById("quantity");


const breadName =
    document.getElementById("breadName");


const breadDescription =
    document.getElementById("breadDescription");


const recipeAmount =
    document.getElementById("recipeAmount");


const ingredientList =
    document.getElementById("ingredientList");


const instructionList =
    document.getElementById("instructionList");


const recipeAnnouncement =
    document.getElementById("recipeAnnouncement");


/* Accessibility */

const visionMode =
    document.getElementById("visionMode");


const decreaseTextButton =
    document.getElementById("decreaseTextButton");


const resetTextButton =
    document.getElementById("resetTextButton");


const increaseTextButton =
    document.getElementById("increaseTextButton");


/* Audio */

const readButton =
    document.getElementById("readButton");


const pauseButton =
    document.getElementById("pauseButton");


const stopButton =
    document.getElementById("stopButton");


const speechRate =
    document.getElementById("speechRate");


const audioStatus =
    document.getElementById("audioStatus");



/* ==========================================================
   RECIPE CALCULATION
   ========================================================== */

function updateRecipe() {


    /*
        Gets the selected bread.

        Example:

        "white"
        "sourdough"
    */

    const selectedBreadType =
        breadTypeSelect.value;


    /*
        Find the selected recipe.
    */

    const recipe =
        breadRecipes[selectedBreadType];


    /*
        Convert the quantity input into a number.
    */

    let numberOfLoaves =
        Number(quantityInput.value);


    /*
        Validate the number.
    */

    if (
        Number.isNaN(numberOfLoaves) ||
        numberOfLoaves < 1
    ) {

        numberOfLoaves = 1;

        quantityInput.value = 1;
    }


    /*
        Maximum of 20 loaves.
    */

    if (numberOfLoaves > 20) {

        numberOfLoaves = 20;

        quantityInput.value = 20;
    }


    /*
        Update bread name.
    */

    breadName.textContent =
        recipe.name;


    /*
        Update bread description.
    */

    breadDescription.textContent =
        recipe.description;


    /*
        Correct singular/plural wording.
    */

    if (numberOfLoaves === 1) {

        recipeAmount.textContent =
            "Recipe for 1 loaf";

    } else {

        recipeAmount.textContent =
            `Recipe for ${numberOfLoaves} loaves`;
    }


    /*
        Remove old ingredients.
    */

    ingredientList.innerHTML = "";


    /*
        Calculate each new ingredient amount.
    */

    recipe.ingredients.forEach(function (ingredient) {


        /*
            GENERAL FORMULA:

            New Amount
                =
            Original Amount × Number of Loaves
        */

        const scaledAmount =
            ingredient.amount * numberOfLoaves;


        /*
            Create a proper list item.
        */

        const ingredientItem =
            document.createElement("li");


        ingredientItem.classList.add(
            "ingredient"
        );


        /*
            Ingredient name.
        */

        const nameElement =
            document.createElement("span");


        nameElement.classList.add(
            "ingredient-name"
        );


        nameElement.textContent =
            ingredient.name;


        /*
            Ingredient quantity.
        */

        const quantityElement =
            document.createElement("span");


        quantityElement.classList.add(
            "ingredient-quantity"
        );


        /*
            Handle ingredients with and without units.
        */

        if (ingredient.unit === "") {

            quantityElement.textContent =
                formatAmount(scaledAmount);

        } else {

            quantityElement.textContent =
                `${formatAmount(scaledAmount)} ${ingredient.unit}`;
        }


        /*
            Add both elements to the ingredient row.
        */

        ingredientItem.appendChild(
            nameElement
        );


        ingredientItem.appendChild(
            quantityElement
        );


        /*
            Add row to ingredient list.
        */

        ingredientList.appendChild(
            ingredientItem
        );

    });


    /*
        Update preparation instructions.
    */

    displayInstructions(
        recipe.instructions
    );


    /*
        Inform screen-reader users that
        the recipe changed.
    */

    const loafWord =
        numberOfLoaves === 1
            ? "loaf"
            : "loaves";


    recipeAnnouncement.textContent =
        `Recipe updated. ${recipe.name}, ${numberOfLoaves} ${loafWord}.`;
}



/* ==========================================================
   INSTRUCTIONS
   ========================================================== */

function displayInstructions(instructions) {


    instructionList.innerHTML = "";


    instructions.forEach(function (instruction) {


        const listItem =
            document.createElement("li");


        listItem.textContent =
            instruction;


        instructionList.appendChild(
            listItem
        );

    });

}



/* ==========================================================
   NUMBER FORMATTING
   ========================================================== */

function formatAmount(amount) {


    /*
        Whole numbers remain whole numbers.

        Example:

        500 instead of 500.00
    */

    if (Number.isInteger(amount)) {

        return amount;
    }


    /*
        Decimal values are limited to
        two decimal places.
    */

    return Number(
        amount.toFixed(2)
    );

}



/* ==========================================================
   VISION MODE
   ========================================================== */

function changeVisionMode() {


    /*
        Read the selected setting.
    */

    const selectedMode =
        visionMode.value;


    /*
        Place the selection on the body.

        CSS rules such as:

        body[data-vision="protanopia"]

        then change the colours.
    */

    document.body.setAttribute(
        "data-vision",
        selectedMode
    );


    /*
        Tell screen-reader users that
        the setting changed.
    */

    const selectedName =
        visionMode.options[
            visionMode.selectedIndex
        ].text;


    recipeAnnouncement.textContent =
        `Vision mode changed to ${selectedName}.`;

}



/* ==========================================================
   TEXT SIZE
   ========================================================== */


/*
    Default text size.
*/

let currentFontSize = 18;


/*
    Minimum and maximum values.
*/

const minimumFontSize = 16;

const maximumFontSize = 30;



function applyFontSize() {


    /*
        Change the CSS variable.
    */

    document.documentElement.style.setProperty(
        "--font-size",
        `${currentFontSize}px`
    );


    /*
        Announce change to assistive technology.
    */

    recipeAnnouncement.textContent =
        `Text size changed to ${currentFontSize} pixels.`;

}



function increaseTextSize() {


    /*
        Increase by 2px until maximum.
    */

    currentFontSize =
        Math.min(
            currentFontSize + 2,
            maximumFontSize
        );


    applyFontSize();

}



function decreaseTextSize() {


    /*
        Decrease by 2px until minimum.
    */

    currentFontSize =
        Math.max(
            currentFontSize - 2,
            minimumFontSize
        );


    applyFontSize();

}



function resetTextSize() {


    currentFontSize = 18;


    applyFontSize();

}



/* ==========================================================
   CREATE TEXT FOR AUDIO
   ========================================================== */

function buildRecipeSpeech() {


    /*
        Get selected recipe.
    */

    const selectedBreadType =
        breadTypeSelect.value;


    const recipe =
        breadRecipes[selectedBreadType];


    /*
        Get quantity.
    */

    let numberOfLoaves =
        Number(quantityInput.value);


    if (
        Number.isNaN(numberOfLoaves) ||
        numberOfLoaves < 1
    ) {

        numberOfLoaves = 1;
    }


    /*
        Correct singular/plural.
    */

    const loafWord =
        numberOfLoaves === 1
            ? "loaf"
            : "loaves";


    /*
        Begin spoken text.
    */

    let speechText =
        `${recipe.name}. `;


    speechText +=
        `Recipe for ${numberOfLoaves} ${loafWord}. `;


    speechText +=
        `${recipe.description} `;


    /*
        Ingredient heading.
    */

    speechText +=
        "Ingredients. ";


    /*
        Add every scaled ingredient.
    */

    recipe.ingredients.forEach(function (ingredient) {


        const scaledAmount =
            ingredient.amount * numberOfLoaves;


        speechText +=
            `${ingredient.name}, `;


        speechText +=
            `${formatAmount(scaledAmount)}`;


        /*
            Add the unit when one exists.
        */

        if (ingredient.unit !== "") {

            speechText +=
                ` ${ingredient.unit}`;
        }


        speechText +=
            ". ";

    });


    /*
        Instructions heading.
    */

    speechText +=
        "Instructions. ";


    /*
        Number each instruction when reading.
    */

    recipe.instructions.forEach(
        function (instruction, index) {


            speechText +=
                `Step ${index + 1}. `;


            speechText +=
                `${instruction} `;

        }
    );


    return speechText;

}



/* ==========================================================
   READ RECIPE ALOUD
   ========================================================== */

function readRecipeAloud() {


    /*
        Check whether the browser supports
        speech synthesis.
    */

    if (
        !("speechSynthesis" in window) ||
        !("SpeechSynthesisUtterance" in window)
    ) {

        audioStatus.textContent =
            "Text-to-speech is not supported by this browser.";

        return;
    }


    /*
        Stop anything that is already being read.

        This prevents multiple recipes from
        speaking over each other.
    */

    window.speechSynthesis.cancel();


    /*
        Build the full recipe text.
    */

    const textToRead =
        buildRecipeSpeech();


    /*
        Create an utterance.
    */

    const utterance =
        new SpeechSynthesisUtterance(
            textToRead
        );


    /*
        Australian English.

        The browser will choose an available
        suitable voice.
    */

    utterance.lang =
        "en-AU";


    /*
        Reading speed selected by user.

        Examples:

        0.75 = slower
        1    = normal
        1.25 = faster
    */

    utterance.rate =
        Number(speechRate.value);


    /*
        Standard pitch.
    */

    utterance.pitch = 1;


    /*
        Standard volume.
    */

    utterance.volume = 1;


    /*
        When speech starts.
    */

    utterance.addEventListener(
        "start",
        function () {

            audioStatus.textContent =
                "Reading recipe aloud.";

            pauseButton.textContent =
                "⏸ Pause";
        }
    );


    /*
        When reading finishes.
    */

    utterance.addEventListener(
        "end",
        function () {

            audioStatus.textContent =
                "Finished reading the recipe.";

            pauseButton.textContent =
                "⏸ Pause";
        }
    );


    /*
        Handle speech errors.
    */

    utterance.addEventListener(
        "error",
        function () {

            audioStatus.textContent =
                "The recipe could not be read aloud.";
        }
    );


    /*
        Start speaking.
    */

    window.speechSynthesis.speak(
        utterance
    );

}



/* ==========================================================
   PAUSE / RESUME AUDIO
   ========================================================== */

function pauseOrResumeAudio() {


    /*
        Check speech synthesis support.
    */

    if (!("speechSynthesis" in window)) {

        return;
    }


    /*
        If currently paused,
        resume reading.
    */

    if (window.speechSynthesis.paused) {


        window.speechSynthesis.resume();


        audioStatus.textContent =
            "Reading resumed.";


        pauseButton.textContent =
            "⏸ Pause";


        return;
    }


    /*
        If currently speaking,
        pause reading.
    */

    if (window.speechSynthesis.speaking) {


        window.speechSynthesis.pause();


        audioStatus.textContent =
            "Reading paused.";


        pauseButton.textContent =
            "▶ Resume";


        return;
    }


    /*
        If nothing is currently playing,
        start the recipe.
    */

    readRecipeAloud();

}



/* ==========================================================
   STOP AUDIO
   ========================================================== */

function stopAudio() {


    if (!("speechSynthesis" in window)) {

        return;
    }


    /*
        Cancel current speech.
    */

    window.speechSynthesis.cancel();


    audioStatus.textContent =
        "Reading stopped.";


    pauseButton.textContent =
        "⏸ Pause";

}



/* ==========================================================
   EVENT LISTENERS
   ========================================================== */


/*
    Change bread.
*/

breadTypeSelect.addEventListener(
    "change",
    updateRecipe
);


/*
    Change quantity.
*/

quantityInput.addEventListener(
    "input",
    updateRecipe
);


/*
    Change colour/vision mode.
*/

visionMode.addEventListener(
    "change",
    changeVisionMode
);


/*
    Text controls.
*/

increaseTextButton.addEventListener(
    "click",
    increaseTextSize
);


decreaseTextButton.addEventListener(
    "click",
    decreaseTextSize
);


resetTextButton.addEventListener(
    "click",
    resetTextSize
);


/*
    Audio controls.
*/

readButton.addEventListener(
    "click",
    readRecipeAloud
);


pauseButton.addEventListener(
    "click",
    pauseOrResumeAudio
);


stopButton.addEventListener(
    "click",
    stopAudio
);



/* ==========================================================
   INITIAL PAGE LOAD
   ========================================================== */

updateRecipe();