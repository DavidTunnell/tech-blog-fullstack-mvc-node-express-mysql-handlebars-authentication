//lotout user from client to api
const logout = async () => {
    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        alert("Failed to log out.");
    }
};

logout();
