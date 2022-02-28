const myProjects = [
    { name: "place holder 1",
    id: "proj1",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 2",
    id: "proj2",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 3",
    id: "proj3",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]},

    { name: "place holder 4",
    id: "proj4",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 5",
    id: "proj5",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 6",
    id: "proj6",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    buttons: ["Deployed site", "Source Code"],
    links: ["the url of app", "the github repo"]}
]

//loop and append onto container

for(let project of myProjects){
    let $projSect = $(`<div id="${project.id}"><div>`)
    $("#project-container").append($projSect)
}

