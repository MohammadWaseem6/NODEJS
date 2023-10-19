// Import required Node.js modules
const http = require("http");
const fs = require("fs");
const url = require("url");

// Create an HTTP server using the http module
const myServer = http.createServer((req, res) => {
    // Ignore requests for "/favicon.ico"
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }

    // Generate a log entry for each incoming request
    const log = `${Date.now()}: ${req.url} - New Request Received :\n`;
    const MYUrl = url.parse(req.url);
    console.log(MYUrl);
    // Append the log entry to a log file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        } else {
            console.log("Log entry added to log.txt");
        }

        // Send a response to the client
        res.end("hello from server Again");
    });
});

// Start the server and make it listen on port 8000
myServer.listen(8000, () => {
    console.log("Server Started! Listening on port 8000.");
});
