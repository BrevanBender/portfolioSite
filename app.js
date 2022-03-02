$('#emailMe').on('click', ()=>{
    console.log("clicked")
    $('#modalContainer').css("display", "block")
})
$("#closeThis").on('click', ()=>{
    location.reload()
})