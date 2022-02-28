const myProjects = [
    { name: "place holder 1",
    id: "proj1",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 2",
    id: "proj2",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 3",
    id: "proj3",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},

    { name: "place holder 4",
    id: "proj4",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 5",
    id: "proj5",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 6",
    id: "proj6",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]}
]

//loop and append onto container

for(let project of myProjects){
    console.log(project.name)
    let $projSect = $(`<div class="projSect"><div>`)
    //create container
    $projSect.append(`<h3>${project.name}<h3>`)
    //add name to container
    let $techHolder = $('<div class="techHolder"><div>')
    for(let tech of project.technologies){
        //loop and add string of array contents
        console.log(tech)
        $techHolder.append(`<span>${tech}, <span>`)
    }
    $projSect.append($techHolder)
    $projSect.append(`<p id="${project.id}p" class="hidme">${project.about}<p>`)
    let $buttonHolder = $('<div class="buttonHolder"><div>')
    $buttonHolder.append($(`<a src="${project.links[1]}"><button class="linkButton">Link to Site</button></a>`))
    $buttonHolder.append($(`<a src="${project.links[2]}"><button class="linkButton">Link to Repo</button></a>`))
    $projSect.append($buttonHolder)
    $("#project-container").append($projSect)
}

