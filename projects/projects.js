const myProjects = [
    { name: "place holder 1",
    id: "proj1",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 2",
    id: "proj2",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 3",
    id: "proj3",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},

    { name: "place holder 4",
    id: "proj4",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 5",
    id: "proj5",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "place holder 6",
    id: "proj6",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]}
]

//loop and append onto container

for(let project of myProjects){
    console.log(project.name)
    let $projSect = $(`<div class="projSect" id="${project.id}"><div>`)
    let $modalProj = $(`<div class="modals" id="${project.id}modal"></div`)
    let $projImg = $(`<img src="${project.backgroundAddress}"></img`)
    //create container
    $projSect.append(`<h3 class="projName">${project.name}<h3>`)
    $modalProj.append(`<h3 class="projName">${project.name}<h3>`)
    $modalProj.append($projImg)
    //add name to container
    let $techHolder = $('<div class="techHolder"><div>')
    for(let tech of project.technologies){
        //loop and add string of array contents
        console.log(tech)
        $techHolder.append(`<span>${tech}, <span>`)
    }
    $projSect.append($techHolder)
    $modalProj.append(`<p id="${project.id}p" class="hideme">${project.about}<p>`)
    let $buttonHolder = $('<div class="buttonHolder" class="hideme"><div>')
    $buttonHolder.append($(`<a src="${project.links[1]}"><button class="linkButton">Link to Site</button></a>`))
    $buttonHolder.append($(`<a src="${project.links[2]}"><button class="linkButton">Link to Repo</button></a>`))
    $modalProj.append($buttonHolder)
    $modalProj.append($(`<button class="closeButton" id="${project.id}C">X<button>`))
    $projSect.css("background-image", `url(${project.backgroundAddress})`)
    $("#project-container").append($projSect)
    $(`#${project.id}Cont`).append($modalProj)
}
let modalClick = document.querySelectorAll('.projSect')
for(let button of modalClick){
    button.addEventListener('click', ()=>{
        $(`#${button.id}Cont`).css("display", "block")
    })
}

let modalClose = document.querySelectorAll('.closeButton')

for(let closer of modalClose){
    closer.addEventListener('click', ()=>{
        $(`#${closer.id}ont`).css("display", "none")
        console.log(`#${closer.id}ont`)
    })
}

// const rendered = $('.projSect')
// console.log(rendered[0].children[3].children)

// $("#filterButton").submit(function(e){
//     e.preventDefault();
//     console.log("clicked")
//     const desiredTech = $("#filterTech").val()
//     $(`span:contains("${desiredTech}")`).parent().css("display", "none")
//     return false
// })


