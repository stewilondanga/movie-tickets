$(document).ready(function(){
  $("#myInput").on("keyup", function(event){
    var value = $(this).val().toLowerCase();
    console.log(event.target.value);
    $("#myLIst li").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    })
  })
})
