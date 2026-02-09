function submitQuery() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields");
        return;
    }

    let allowedDomains = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com"];
    let valid = false;

    for (let i = 0; i < allowedDomains.length; i++) {
        if (email.endsWith(allowedDomains[i])) {
            valid = true;
            break;
        }
    }

    if (!valid) {
        alert("Cannot accept this email domain");
        return;
    }

    alert("Your query has been submitted successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
