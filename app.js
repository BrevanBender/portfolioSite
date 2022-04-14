$('#emailMe').on('click', ()=>{
    console.log("clicked")
    $('#modalContainer').css("display", "block")
})
$("#closeThis").on('click', ()=>{
    location.reload()
})
const myProjects = [
    
    { name: "GeoGram",
    id: "proj1",
    technologies: ["CSS", "HTML", "JavaScript", "JQuery"],
    backgroundAddress: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    about: "I used these technologies to make this app that does this. With this project I really focused on using blank to blank",
    links: ["the url of app", "the github repo"]},
    
    { name: "Event Finder",
    id: "proj2",
    technologies: ["CSS", "Express", "Mongoose", "MongoDB"],
    backgroundAddress: "./assets/event.png",
    about: "This fullstack express/mongoose app was a group effort with some of my great classmates. It has login logic complete with password encryption, user created and ticketmaster api events, a query search function, and all restful routes for two models.",
    links: ["https://eventpalooza.herokuapp.com/events", "https://github.com/BrevanBender/event-finder"]},
    
    { name: "Pokemon Battling Simulator",
    id: "proj3",
    technologies: ["CSS", "HTML", "JavaScript", "Cypress"],
    backgroundAddress: "./assets/pokemonBattle.png",
    about: "I collaborated with several others to complete this one week project. This app was produced using cypress and tdd to ensure everything was functioning as intended. While the other technologies used are pretty basic, it was challenging to manage the game logic. In the end we produced 8 layers of conditionals to allow over 50 unique outcomes per turn cycle and integrated a simplistic retro style to the app.",
    links: ["https://brevanbender.github.io/pokemon-battling/", "https://github.com/BrevanBender/pokemon-battling/tree/brevanBranch"]},
  ]

const tagLines = [
    'Software Developer',
    'Outdoors Lover',
    'Avid Coder',
    "Climbs things he probaby shouldn't",
    'Appreciates you stopping by'
]

for(let project of myProjects){
    let randoNum = Math.floor((Math.random()-.5)*10)
    let $projSect = $(`<div class="projSect" id="${project.id}"><div>`)
    let $modalProj = $(`<div class="modals" id="${project.id}modal"></div`)
    let $projImg = $(`<img src="${project.backgroundAddress}"></img`)
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
    $projSect.append(`<p id="${project.id}p" class="hideme">${project.about}<p>`)
    let $buttonHolder = $('<div class="buttonHolder"id="hidemetoo"><div>')
    $buttonHolder.append($(`<a href="${project.links[0]}" target="_blank"><button class="linkButton">Link to Site</button></a>`))
    $buttonHolder.append($(`<a href="${project.links[1]}" target="_blank"><button class="linkButton">Link to Repo</button></a>`))
    $projSect.append($buttonHolder)
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
function shiftContent(e){
    this.querySelectorAll('.projSect').forEach(projSect => {
        const shiftSpeed = projSect.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*shiftSpeed)/95
        const y = (window.innerHeight - e.pageY*shiftSpeed)/95
        projSect.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
document.addEventListener("mousemove",shiftContent)

function scrollToAnchor(aid){
    var aTag = $("section[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('#toproj').click(function(){
    scrollToAnchor('projects')
})

$('#arrowHover').hover(()=>{
    $('#navigation').css('left', 0)
    $('#arrowHover').css('opacity', 0)
    $('#desktopNav').css('opacity', 1)
})

$('#navigation').mouseleave(()=>{
    $('#navigation').css('left', '-10vw')
    $('#arrowHover').css('opacity', 1)
    $('#desktopNav').css('opacity', 0)
})
let currentTag = 0
$('#taglines').html(tagLines[currentTag])
$('#shuffle').click(function(){
    if(currentTag === tagLines.length-1){
       currentTag = 0
       console.log('limit')
       $('#taglines').html(tagLines[currentTag])
    } else{
        currentTag++
        $('#taglines').html(tagLines[currentTag])
    }
})
$('.projSect').mouseover(function(){
    $(this).find('#hidemetoo').css("display", "inline-block")
})
$('.projSect').delay( 900 ).mouseleave(function(){
    $(this).find('#hidemetoo').css("display", "none")
})