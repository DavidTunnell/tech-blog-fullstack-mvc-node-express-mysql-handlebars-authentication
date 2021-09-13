module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a custom formatted string
    format_time: (date) => {
        //'toLocaleTimeString()' method to format the time with custom parameters
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    },
    //cuts the length of blog content down for front page/index
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
};
