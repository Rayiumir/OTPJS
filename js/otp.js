/**!
 * OTPJS v1.0.0
 *
 * A simple, lightweight library for Verification Form
 *
 * @copyright Copyright 2024 Rayiumir Limited.
 * @author    Raymond Baghumian.
 * @link      https://github.com/Rayiumir/OTPJS
 *
 */

const inputs = document.querySelectorAll("input");
const buttons = document.querySelector("button");

window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input) => {

    input.addEventListener("input", () => {

        const currentInput = input;
        const nextInput = input.nextElementSibling;

        if (currentInput.value.length > 1 && currentInput.value.length == 2) {
            currentInput.value = "";
        }

        if (nextInput !== null && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if(!inputs[3].disabled && inputs[3].value !== "") {
            buttons.classList.add("active");
        }
        else{
            buttons.classList.remove("active");
        }

    });

    input.addEventListener("keyup", (e) => {
        if(e.key === "Backspace") {
            if(input.previousElementSibling !== null) {
                e.target.value = "";
                e.target.setAttribute("disabled", true);
                input.previousElementSibling.focus();
            }
        }
    })

});