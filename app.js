var taskList = [];

//Display dynamic HTML list
//UL & LI tags
//Remove button displays
function displayList()
{
	
	//Variable for creating & storing dynamic HTML elements
	var taskListContent = "<ul>";
	
	//Create LI tags and loop through the array
	for(var i=0; i < taskList.length; i++)
	{
		taskListContent += "<li>"+taskList[i]+"</li>";
	}
	
	taskListContent += "</ul>";
	//Replace the HTML Elements inside the  id="TaskListValue"
	document.getElementById("TaskListValue").innerHTML = taskListContent;
}

function addTask()	//Add in the tasks from the input field in our HTML file
{
	//Create a variable to hold input value
	var task = document.getElementById("inputValue").value;
	//Clear off the input variable after saving in the task variable
	document.getElementById("inputValue").value = "";
	//Add the task into our Array
	taskList.push(task);
	
	//Display the latest list of tasks
	displayList();
}

displayList();
document.getElementById("Add").addEventListener("click", addTask);