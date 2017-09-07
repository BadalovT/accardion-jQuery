$(document).ready(function () {
    $(".item").click(function(){
       // console.log($(this));
        $(this).find("ul").toggle();
    })
});