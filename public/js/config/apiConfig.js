//domain for the API location go here
const apiAccessProtocol = "http";
const apiDomain = "localhost";
const apiPort = 3001;

function getApiUrl() {
    const apiUrl = `${apiAccessProtocol}://${apiDomain}:${apiPort}`;
    return apiUrl;
}
