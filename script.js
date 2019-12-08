
$(".txtb").on("keyup", function(e){
  if((e.keyCode == 16 ||e.keyCode == 13 ||e.keyCode == 32) && $(".txtb").val()!="")
{
  var task = $("<div class='task'></div>").text($(".txtb").val());
  var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
    task.hide();

  });
  
  var cheak = $("<i class='fas fa-check'></i>").click(function(){
    $(".comp").append(task);
    
  });

  var edit = $("<i class='fa fa-edit'></i>").click(function(){
  $(".txtb").val(task.text());
  task.hide();
  }); 
  task.append(del,cheak,edit);
  $(".notcomp").append(task);
 
}
  
  
});