//fetch the data from the api
async function getData () {
    let resObj = await fetch('https://ghibliapi.herokuapp.com/people');
    let apiData = await resObj.json();

    // console.log(apiData)

    return apiData
}

//select the corresponding divs in html? I think?
const cardDiv = document.querySelector('#card')
const contentDiv = document.querySelector('#content')
 
// move the html format to js and loop through the format for each object

getData().then((data) => {

    console.log(data)

     data.forEach((people) => {
        //create the div
        let containerFrontDiv = document.createElement('div')

        //create the html format
        let frontHtml = `
        <h1 id='name'>${people.name}</h1>
        <button id='expand'>Click for more information</button>
        `
        //link the html to the div. I think
        containerFrontDiv.innerHTML = frontHtml
        
        //append the front div to the content div
        contentDiv.append(containerFrontDiv);
    })

    data.forEach((people) => {
        //create the back div
        let containerBackDiv = document.createElement('div')
        //creathe the back div html
        let backHtml = `
        <h2>Gender: ${people.gender}</h2>
        <p>Age: ${people.age}</p>
        <p>Hair Color: ${people.hair_color}</p>
        <p>Eye Color: ${people.eye_color}</p>
        `
        //attatch the html to the div
        containerBackDiv.innerHTML = backHtml
        
        //attatch the back div to the front div
        containerFrontDiv.append(containerBackDiv);
    })

    //attatch the content div to the bigger card div
    cardDiv.append(contentDiv)

   

})

