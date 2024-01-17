
document.addEventListener('DOMContentLoaded', function () {
    const prefixElement = document.getElementById('prefix-text');
    const contentElement = document.getElementById('content-text');
    const textContents = [
        "App Store Developer.",
        "Student.",
        "Swift Student Challenge Contender.",
        "Keen Coder.",
    ];
    const prefixText = "I'm an";
    let contentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = isDeleting ? prefixText + textContents[contentIndex].substring(0, charIndex - 1) : prefixText + textContents[contentIndex].substring(0, charIndex + 1);

        prefixElement.innerHTML = prefixText;
        contentElement.innerHTML = currentText;

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        if (!isDeleting && charIndex <= currentText.length) {
            setTimeout(() => type(), 50); // Typing speed
        } else if (!isDeleting && charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(() => type(), 1000); // Delay before starting the delete animation
        } else if (isDeleting && charIndex > 0) {
            isDeleting = false;
            setTimeout(() => type(), 50); // Typing speed during delete animation
        } else {
            contentIndex = (contentIndex + 1) % textContents.length; // Loop back to the first text if reached the end
            isDeleting = false;
            setTimeout(() => type(), 1500); // Delay before typing the next text
        }
    }

    type();
});












