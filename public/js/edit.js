//update post via client by calling api
const submitPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML; //need id of logged in user
    const post_id = document.querySelector(".current-post-id").innerHTML;

    if (!author_id) {
        alert(
            "You can't post if not logged in. Please logout and in again and then try again."
        );
    } else {
        if (title && content) {
            //'just need to get correct id
            const response = await fetch("/api/post/" + post_id, {
                method: "PUT",
                body: JSON.stringify({ title, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert(
                    "Failed to update post. " +
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

//add event listeners
document
    .querySelector(".edit-submit")
    .addEventListener("click", submitPostHandler);
