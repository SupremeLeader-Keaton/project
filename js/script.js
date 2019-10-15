$(document).ready(function(){
    $('[data-url]').each(function(i, DOM){
      $(DOM).load($(DOM).data('url'))
 
    })
})