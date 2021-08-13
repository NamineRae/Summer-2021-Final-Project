//fetch the data from the api
async function getData () {
    let resObj = await fetch('https://ghibliapi.herokuapp.com/people');
    let apiData = await resObj.json();

    // console.log(apiData)

    return apiData
}

const cardDiv = document.querySelector('#card')
 
// move the html format to js and loop through the format for each object

getData().then((data) => {
    console.log(data)

    data.forEach((character) => {

        let containderFrontDiv = document.createElement('div')

        let frontHtml = `
        <h1>Name</h1>
        // <img>If there is one</img>
        `
        containderFrontDiv.innerHTML = frontHtml
        
        cardDiv.append(containderFrontDiv);
    })

    data.forEach((character) => {

        let containderBackDiv = document.createElement('div')

        let backHtml = `
        <h1>Gender</h1>
        // <img>If there is one</img>
        `
        containderBackDiv.innerHTML = backHtml
        
        cardDiv.append(containderBackDiv);
    })
})