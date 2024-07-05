
function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const datetime = document.getElementById('datetime').value;

     if (title === '' || description === '' || datetime === '') {
        alert('Please fill out all fields');
        return;
    }



    const taskList = document.getElementById('task-list');
                const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskHeader = document.createElement('div');
      taskHeader.className = 'task-header';

    const taskTitle = document.createElement('span');
    taskTitle.textContent = title;
    taskTitle.style.fontWeight = "800"

    const taskDatetime = document.createElement('span');
                taskDatetime.textContent = new Date(datetime).toLocaleString();

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
         completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
        taskItem.classList.toggle('completed');
    };


    const editButton = document.createElement('button');
                            editButton.textContent = 'Edit';
    editButton.onclick = () => {
        const newTitle = prompt('Edit Title:', title);
                 const newDescription = prompt('Edit Description:',      description);
        const newDatetime = prompt('Edit Date and Time:', datetime);
                              if (newTitle !== null) taskTitle.textContent = newTitle;
        if (newDescription !== null) taskDescription.textContent = newDescription;
         if (newDatetime !== null) taskDatetime.textContent = new Date(newDatetime).toLocaleString();
    };


    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskButtons.appendChild(completeButton);
             taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);
  
         taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(taskDatetime);
    taskHeader.appendChild(taskButtons);

    const taskDescription = document.createElement('p');
    taskDescription.textContent = description;

        taskItem.appendChild(taskHeader);
    taskItem.appendChild(taskDescription);
      taskList.appendChild(taskItem);


           document.getElementById('title').value = '  ';
          document.getElementById('description').value = '  ';
    document.getElementById('datetime').value = '';
}
