$(document).ready(function () {

  $('[data-url]').each(function (i, DOM) {
    $(DOM).load($(DOM).data('url'))

  })
})

function showName(e){
  var firstName= document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  document.getElementById("show").innerText = firstName+" "+lastName;        
}