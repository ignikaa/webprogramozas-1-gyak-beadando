document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(e) {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Ellenőrzés
        if (
            name.value.length < 10 ||
            subject.value.length < 10 ||
            message.value.length < 10 ||
            !email.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
        ) {
            alert("Kérjük, minden mezőt helyesen tölts ki! A szöveges mezők legyenek legalább 10 karakter hosszúak, az email pedig érvényes.");
            e.preventDefault();
        }
    });
});
