// async await practice
// abstract into functions is tidier!

// maybe from a form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {   // this needs to be async as it has await below in procedural workflow func

    const response = await fetch(url);
    const jsonResponse = await response.json();   
    const joke = jsonResponse.value.joke;

    postJokeToPage(joke); 
}

const postJokeToPage = (joke) => {  // this is where youd add something to display it on page
    console.log(joke);
}

// procedural workflow function
const processJokeRequest = async () => {  // this is whats called by event handler
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);    // this needs to be an async function to be called as await
    console.log("Finished");
}

processJokeRequest(); //this would be the event handler to kick start everything