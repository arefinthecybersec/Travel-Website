document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById('search-bar');
    const text = "Are you willing to travel?";
    let index = 0;

    function type() {
        if (index < text.length) {
            searchBar.placeholder += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed (in milliseconds)
        }
    }

    searchBar.placeholder = ""; // Clear the placeholder
    type(); // Start typing
});