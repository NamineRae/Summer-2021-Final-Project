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
        <h2>Gender: ${people.gender}</h2>
        <p>Age: ${people.age}</p>
        <p>Hair Color: ${people.hair_color}</p>
        <p>Eye Color: ${people.eye_color}</p>`;
        //the h2 - eye color data is SUPPOSED to be the data shown when the expand button is clicked, but I won't be able to figure that out in time

        //link the html to the div. I think
        containerFrontDiv.innerHTML = frontHtml

        //make expansion button
        let expansionButton = document.createElement('button');

        //button's text
        expansionButton.innerHTML = 'Click for more information'

        //made button clickable
        expansionButton.addEventListener('click', () => {
            console.log(`You have clicked the button for ${people.name} `)
        })

        //attatch the button to the div
        containerFrontDiv.append(expansionButton)
        
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

    const filterFemaleButton = document.querySelector('#femaleFilter');
    const filterMaleButton = document.querySelector('#fmaleFilter');


    filterFemaleButton.addEventListener('click', () => {
        
        contentDiv.innerHTML = '';

        getData().then((people) => {
            let onlyFemale = people.filter((data) => {
                return data.gender ==='female'
               })

               displayPeople(onlyFemale)
        })
    })

    filterMaleButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';

        getData().then((people) => {
            let onlyMale = people.filter((data) => {
                return data.gender ==='male'
               })

               displayPeople(onlyMale)
        })
    })

    //make button to filter to only female characters
    // femaleFilterButton.addEventListener('click', () => {
    //     getData().then((people) => {
    //          let onlyFemale = people.filter((data) => {
    //          return data.gender ==='female'
    //         })

    //     displayPeople(onlyFemale);
    //      })
    // })

    //make button to filter to only male characters
    maleFilterButton.addEventListener('click', () => {
        getData().then((people) => {
            let onlyMale = people.filter((data) => {
            return data.gender ==='male'
             })

        displayPeople(onlyMale);
        })
    })

})