//domain for the API location can go here
const apiAccessProtocol = "http";
const apiDomain = "localhost";
const apiPort = 3001;

//create custom API domains to call
function getApiUrl() {
    const apiUrl = `${apiAccessProtocol}://${apiDomain}:${apiPort}`;
    return apiUrl;
}
