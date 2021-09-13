//try to log user in from client to API
const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector(".username-input").value.trim();
    const password = document.querySelector(".password-input").value.trim();

    if (email && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(
                "Failed to login. " +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
    } else {
        alert("Please fill out all fields.");
    }
};

//add event listeners
document
    .querySelector(".login-button")
    .addEventListener("click", loginFormHandler);
