module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    format_time: (date) => {
        //'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    },
};
