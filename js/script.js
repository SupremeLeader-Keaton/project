$(document).ready(function () {

  $('[data-url]').each(function (i, DOM) {
    $(DOM).load($(DOM).data('url'))

  })
})

function showName(e) {
  var firstName = document.getElementById("form34").value;
  document.getElementById("show").innerText = firstName;
}