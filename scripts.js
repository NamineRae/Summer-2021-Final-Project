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

     data.forEach((people) => {

        let containerFrontDiv = document.createElement('div')

        let frontHtml = `
        <h1>${people.name}</h1>
        // <img>If there is one</img>
        `
        containerFrontDiv.innerHTML = frontHtml
        
        cardDiv.append(containerFrontDiv);
    })

    data.forEach((people) => {

        let containerBackDiv = document.createElement('div')

        let backHtml = `
        <h1>${people.gender}</h1>
        <p>${people.age}</p>
        <p>${people.species}</p>
        <p>${people.hair_color}</p>
        <p>${people.eye_color}</p>
        `
        containerBackDiv.innerHTML = backHtml
        
        cardDiv.append(containerBackDiv);
    })

    // data.forEach((data) => {

    //     let containerFrontDiv = document.createElement('div')

    //     let frontHtml = `
    //     <h1>${data.name}</h1>
    //     // <img>If there is one</img>
    //     `
    //     containerFrontDiv.innerHTML = frontHtml
        
    //     cardDiv.append(containerFrontDiv);
    // })

    // data.forEach((data) => {

    //     let containerBackDiv = document.createElement('div')

    //     let backHtml = `
    //     <h1>${data.gender}</h1>
    //     <p>${data.age}</p>
    //     <p>${data.species}</p>
    //     <p>${data.hair_color}</p>
    //     <p>${data.eye_color}</p>
    //     `
    //     containderBackDiv.innerHTML = backHtml
        
    //     cardDiv.append(containerBackDiv);
    // })

})