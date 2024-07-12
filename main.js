//add task to list when user inputs something and submits 
var form = document.getElementById('addForm');
var taskList = document.getElementById('taskList');

form.addEventListener('submit', addTask);

//delete tasks 
var panel = document.getElementById('panel'); 
taskList.addEventListener('click', removeTask);

//filter tasks 
var searchBar = document.getElementById('filter'); 
searchBar.addEventListener('keyup', filterTask);

function removeTask(e) {
    if(e.target.classList.contains('delete')){
        console.log(panel);
        panel.style.display = 'block';
        console.log(panel);
        panel.addEventListener('click', function(eh) {
            if(eh.target.classList.contains('confirm-delete-yes')) {
                var li = e.target.parentElement; 
                taskList.removeChild(li); 
            }
            panel.style.display = 'none';
        });

    }
}

function filterTask(e) {
    //grab searchbar input, to lowercase 
    var text = e.target.value.toLowerCase(); 
    console.log(text);
    var tasks = document.getElementsByClassName('item'); 

    //tasks needs to be an array not html collection 
    taskArr = Array.from(tasks); 
    console.log(taskArr);
    taskArr.forEach(function(task) {
        console.log(task); 
        var name = task.firstChild.textContent.toLowerCase(); 
        console.log(name);
        if (name.includes(text)) {
            task.style.display = 'block'; 
        } else {
            task.style.display = 'none';
        }  
    }); 
}
function addTask(e) { 
    //prevent submit default 
    e.preventDefault();
    //get input value 
    var newTask = document.getElementById('task').value; 
    console.log(newTask);
    //create new li element to add to the list of tasks 
    var li = document.createElement('li'); 
    li.className = 'item'; 
   
    //add text to new li element 
    li.appendChild(document.createTextNode(newTask));
    //create new delete btn element 
    var deleteBtn = document.createElement('button'); 
    deleteBtn.className = 'btn delete'; 
    //add text node 
    deleteBtn.appendChild(document.createTextNode('X'));
    //append deletebtn to li element 
    li.appendChild(deleteBtn);
    //append li to list 
    taskList.appendChild(li);

}