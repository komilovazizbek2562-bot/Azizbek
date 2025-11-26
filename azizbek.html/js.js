function scrollToForm() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").innerText =
        "Arizangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.";
});
