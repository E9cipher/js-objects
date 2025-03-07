var input = document.querySelectorAll("input");
var restartBtn = document.getElementById("btnrestart");
var validateBtn = document.getElementById("btnvalidate");
var answersBtn = document.getElementById("btnshowanswers");
const solutions = {
    "input1": "carried",
    "input2": "figured",
    "input3": "ended",
    "input4": "give",
    "input5": "hang out",
    "input6": "keep",
    "input7": "grow",
    "input8": "answer_8",
    "input9": "answer_9",
    "input10": "answer_10",
    "input11": "answer_11",
    "input12": "answer_12",
    "input13": "answer_13",
    "input14": "answer_14",
    "input15": "answer_15"
}

/* As we're no longer displaying the results in the HTML, we can remove this function
function styling(str) {
    str = str.replace(/(?<!\d)(\d+)/g, ' $1');
    return str.charAt(0).toUpperCase() + str.slice(1);
}
*/

function validate(notify = true) {
    let allCorrect = true;
    document.querySelectorAll("input").forEach(input => {
        var i = 1;
        const userAnswer = input.value;
        const correctAnswer = solutions[input.id];
        const icon = document.getElementById("icon" + input.id.replace("input", ""));

        // Validate and toggle classes
        if (userAnswer === correctAnswer) {
            icon.classList.remove("hidden");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-check");
            // input
            input.classList.add("correct");
        } else {
            icon.classList.remove("hidden");
            icon.classList.remove("fa-check");
            icon.classList.add("fa-xmark");
            // input
            input.classList.add("incorrect");
            // allCorrect
            allCorrect = false;
        }
        // btn restart
        restartBtn.classList.remove("hidden");
        // btn showAnswers
        answersBtn.classList.remove("hidden");
        // btn validate
        validateBtn.setAttribute("disabled", "disabled");
        i++;
    });

    


    if (allCorrect & notify) {
        alert("🎉 All answers are correct!");
    } else {
        if (notify) {
            alert("❌ You have " + document.querySelectorAll(".incorrect").length + "/14 incorrect answers.");
        }
    }
}
    /* let resultText = "Results:<br><ul>";

    for (let key in solutions) {
        let userAnswer = document.getElementById(key).value.trim();
        if (userAnswer === solutions[key]) {
            // resultText += styling(`<li>${key}: ✅ Correct!</li><br>`);

        } else {
            // resultText += styling(`<li>${key}: ❌ Wrong! (Your answer: ${userAnswer})</li><br>`);
            allCorrect = false;
        }
    }
    resultText += "</ul>";

    document.getElementById("result").innerHTML = resultText;*/

    function reset () {
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
            input.classList.remove("correct");
            input.classList.remove("incorrect");
            document.getElementById("icon" + input.id.replace("input", "")).classList.add("hidden");
        });
        restartBtn.classList.add("hidden");
        validateBtn.removeAttribute("disabled");
        answersBtn.classList.add("hidden");
        input.forEach(input => {
            input.classList.remove("solved");
            input.classList.remove("correct");
            input.classList.remove("incorrect");
        });
    }

function showAnswers () {
    document.querySelectorAll("input").forEach(input => {
        input.value = solutions[input.id];
        input.classList.add("solved");
        console.log("Answers revealed! Are you cheating?");
    });
    validate(notify = false);
}

