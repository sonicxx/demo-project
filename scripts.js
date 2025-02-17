document.addEventListener("DOMContentLoaded", function() {
    const learnMoreLink = document.getElementById("learn-more-link");
    learnMoreLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Learn more about our website!");
    });
});