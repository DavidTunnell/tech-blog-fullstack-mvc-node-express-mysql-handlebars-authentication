const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector(".username-input").value.trim();
    const email = document.querySelector(".email-input").value.trim();
    const password = document.querySelector(".password-input").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(
                "Failed to sign up. " +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
    } else {
        alert("Please fill out all fields.");
    }
};

document
    .querySelector(".signup-button")
    .addEventListener("click", signupFormHandler);
