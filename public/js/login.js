const testParagraphTag = document.querySelector(".myTest");

const apiUrl = getApiUrl();

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector(".username-input").value.trim();
    const password = document.querySelector(".password-input").value.trim();
    console.log(JSON.stringify({ email, password }));
    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            //TODO add on page validation
            alert("Failed to log in.");
        }
    }
};

document
    .querySelector(".login-button")
    .addEventListener("click", loginFormHandler);

// async function getTests() {
//     const url = `${apiUrl}/api/test/`;
//     let response = await fetch(url);
//     let data = await response.json();
//     return data;
// }

// async function renderTests() {
//     const tests = await getTests();
//     let html = "<ul>";
//     tests.forEach((test) => {
//         html += "<li>" + test.test_name + "</li>";
//     });
//     html += "</ul>";
//     testParagraphTag.innerHTML = html;
// }

// renderTests();
