const testParagraphTag = document.querySelector(".myTest");

const apiUrl = getApiUrl();

async function getTests() {
    const url = `${apiUrl}/api/test/`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function renderTests() {
    const tests = await getTests();
    let html = "<ul>";
    tests.forEach((test) => {
        html += "<li>" + test.test_name + "</li>";
    });
    html += "</ul>";
    testParagraphTag.innerHTML = html;
}

renderTests();
