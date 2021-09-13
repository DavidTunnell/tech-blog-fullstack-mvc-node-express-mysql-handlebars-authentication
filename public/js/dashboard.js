//create post from client to API
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
                document.location.replace("/dashboard");
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

//delete post from client to API
const deletePostHandler = async (event) => {
    event.preventDefault();

    const deletePostId = event.target.getAttribute("data-id");
    if (deletePostId) {
        const response = await fetch("/api/post/" + deletePostId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(
                "Failed to delete post. " +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
    }
};

//add event listeners
document
    .querySelector(".submit-post")
    .addEventListener("click", submitPostHandler);

const deleteButtons = document.querySelectorAll(".delete-post");
deleteButtons.forEach((el) =>
    el.addEventListener("click", (event) => deletePostHandler(event))
);
