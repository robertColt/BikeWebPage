var questions = [0,0,0,0,0,0,0,0,0,0];

function check(element){
  console.log(element.value);
  var elementInfo = element.value.split("-");
  var id = elementInfo[0];
  var alert = document.querySelector("#alert-"+id);
  var alertSymbol = document.querySelector("#"+id);

  if(elementInfo[1] == "false"){
    alert.className = "alert alert-danger";
    alertSymbol.className = "glyphicon glyphicon-remove";
    element.parentElement.style.backgroundColor = "#ffa09b";
  }else{
    alert.className = "alert alert-success";
    alertSymbol.className = "glyphicon glyphicon-ok";
    element.parentElement.style.backgroundColor = "#9eff9b";

  }

}
