window.onload = function () {
    alert("Welcome to Keywave! Best keyboard selling site");
};

const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

function checkAvailability(btn) {
    btn.nextElementSibling.innerHTML = "Availability: <b>" + btn.dataset.stock + "</b>";
}