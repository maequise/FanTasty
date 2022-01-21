// Responsive Megamenu
document.addEventListener('DOMContentLoaded', function (event) {
    const navModal = document.getElementById("navmodal");
    const openMenu = document.getElementById("openmenu");
    const closeMenu = document.getElementById("closemenu");

    // Open Megamenu and Make Main Fixed Position
    openMenu.addEventListener("click", function () {
        navModal.classList.add("active");
    });

    // Close Megamenu and Remove Main Fixed Position
    closeMenu.addEventListener("click", function () {
        navModal.classList.remove("active");
    });
});

