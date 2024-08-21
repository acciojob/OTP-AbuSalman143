//your JS code here. If required.
// Handle input to focus on the next input field
function handleInput(event) {
    const input = event.target;
    input.classList.add('focused');
    if (input.value.length === 1) {
        input.classList.remove('focused');
        const nextInput = input.nextElementSibling;
        if (nextInput && nextInput.classList.contains('code')) {
            nextInput.focus();
            nextInput.classList.add('focused');
        }
    }
}

// Handle backspace to delete and focus on the previous input field
function handleBackspace(event) {
    const input = event.target;
    if (event.key === "Backspace" && input.value === "") {
        const prevInput = input.previousElementSibling;
        if (prevInput && prevInput.classList.contains('code')) {
            prevInput.focus();
        }
    }
}
