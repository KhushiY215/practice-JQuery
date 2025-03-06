$("h1").addClass("big-title");
$("button").text("Do not touch!");
$("button").click(function(){
    $("h1").css("color","red")
});
$("input").keypress(function(event){
   $("h1").html(event.key);
});