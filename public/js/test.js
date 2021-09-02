const testParagraphTag = document.querySelector('.myTest');

const apiAccessProtocol = "http";
const apiDomain = "localhost";
const apiPort = 3001;
const apiUrl = `${apiAccessProtocol}://${apiDomain}:${apiPort}`;

async function getTests() {
    const url = `${apiUrl}/api/test/`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function renderTests() {
    const tests = await getTests();
    let html = "<ul>";
    tests.forEach(test => {
        html += "<li>" + test.test_name + "</li>";
    });
    html += "</ul>";
    testParagraphTag.innerHTML = html;
}

renderTests();

// module.exports = { renderTests };














// var getTests = async function() {
//     const url = `${apiUrl}/api/test/`;
//     // let response = await fetch(url, {
//     //     method: "GET"
//     // }).catch(function(error) {
//     //     // Error handling here!
//     // });


//     const response = await (await fetch(url, {
//             method: "GET"
//         })).then(response => response.json())
//         .then(data => console.log(data));


//     // console.log(response);
//     // response;
// };

// getTests();
// console.log();
// getTests();
// alert("dadsa");


// async function newFormHandler(event) {
//     event.preventDefault();

//     // const description = document.querySelector('#description').value;
//     // const guest_name = document.querySelector('#guest_name').value;
//     // // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
//     // const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
//     // // Send fetch request to add a new dish
//     // const response = await fetch(`/api/dish`, {
//     //   method: 'POST',
//     //   body: JSON.stringify({
//     //     dish_name,
//     //     description,
//     //     guest_name,
//     //     has_nuts,
//     //   }),
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // });
//     // //if the dish is added, the 'all' template will be rerendered
//     // if (response.ok) {
//     //   document.location.replace('/');
//     // } else {
//     //   alert('Failed to add dish');
//     // }


// }

// document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);