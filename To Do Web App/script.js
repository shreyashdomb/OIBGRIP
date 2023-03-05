let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function(event) {
	event.preventDefault(); // prevent the form from submitting
	let task = taskInput.value.trim();
	if (task !== "") {
		let li = document.createElement("li");
		li.innerText = task;
		taskList.appendChild(li);
		taskInput.value = "";
	}
});

taskList.addEventListener("click", function(event) {
	let li = event.target.closest("li");
	if (li !== null) {
		li.remove();
	}
});
