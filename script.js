document.addEventListener('DOMContentLoaded', function () {
    const prefixElement = document.getElementById('prefix-text');
    const contentElement = document.getElementById('content-text');
    const textContents = [
        "App Store Developer.",
        "Student.",
        "Swift Student Challenge Contender.",
        "Keen Coder.",
    ];
    const prefixText = "I'm a ";
    const finalText = "I'm a Keen Coder.";
    let contentIndex = 0;
    let charIndex = 0;

    function type() {
        const currentText = prefixText + textContents[contentIndex];

        prefixElement.innerHTML = prefixText;
        contentElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex <= currentText.length) {
            setTimeout(() => type(), 50); // Typing speed
        } else {
            setTimeout(() => showFinalText(), 1500); // Delay before showing the final text
        }
    }

    function showFinalText() {
        contentElement.innerHTML = finalText;
    }

    type();
});







