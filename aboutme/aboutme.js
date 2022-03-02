let CurrentProjIndex = 0
let numOfProj = $('.carousel-projects').children.length + 1

$('.next').on('click', ()=>{
    $('.carousel-projects').children().eq(CurrentProjIndex).css('display', 'none')
    
    if(CurrentProjIndex < numOfProj){
        CurrentProjIndex++
    } else {
        CurrentProjIndex = 0
    }
    
    $('.carousel-projects').children().eq(CurrentProjIndex).css('display', 'flex')
})

$('.previous').on('click', ()=>{
    $('.carousel-projects').children().eq(CurrentProjIndex).css('display', 'none')

    if(CurrentProjIndex > 0){
        CurrentProjIndex --
    } else{
        CurrentProjIndex = numOfProj
    }
    $('.carousel-projects').children().eq(CurrentProjIndex).css('display', 'flex')
})