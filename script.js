var form = document.getElementById("task_form");
var list = document.getElementById("task_entry");
var ulContent = document.getElementById("task_list");


form.onsubmit = function(event){
	event.preventDefault();
    
    var newElement = document.createElement("li");
    var newTextNode = document.createTextNode(list.value);
    
    newElement.appendChild(newTextNode);
    ulContent.appendChild(newElement);

    var RemoveText = document.createTextNode("Done");
    var RemoveButton = document.createElement("button");

    RemoveButton.appendChild(RemoveText);
    newElement.appendChild(RemoveButton);
    
    RemoveButton.onclick = function(){
      ulContent.removeChild(newElement);
    };
    

    this.reset();
  }; 