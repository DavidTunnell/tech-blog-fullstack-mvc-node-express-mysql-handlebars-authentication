const submitPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML; //need id of logged in user
    if (!author_id) {
        alert(
            "You can't post if not logged in. Please logout and in again and then try again."
        );
    } else {
        if (title && content) {
            const response = await fetch("/api/post/", {
                method: "POST",
                body: JSON.stringify({ title, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/");
            } else {
                alert(
                    "Failed to submit post. " +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
        } else {
            alert("Please fill out all fields.");
        }
    }
};

document
    .querySelector(".submit-post")
    .addEventListener("click", submitPostHandler);
