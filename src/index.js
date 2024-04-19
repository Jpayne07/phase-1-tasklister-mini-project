document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    createNewTask(newTaskDescription.value)
  })

});

function createNewTask(task){
  let p = document.createElement('p');
  let deleteButton = document.createElement('button')
  deleteButton.addEventListener('click', handleDelete)
  deleteButton.textContent = 'x'
  p.textContent = `${task} `;
  p.appendChild(deleteButton)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)

  //code for priority
  let parentDiv = document.createElement('span')
  let select = document.createElement('select');
  
  
  select.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'low'){
      selectedValue.style.color = 'green'
    }
    else if (selectedValue === 'medium')
      {
        parentDiv.style.color = 'yellow'
      }
      else
      {
        parentDiv.style.color = 'red'
      }} )
  
  p.appendChild(parentDiv)
  parentDiv.appendChild(select)
  //let option = document.createElement('option')
  //select.appendChild(option)
  for (const prioritySelect of priority) {
    const option = document.createElement('option');
    option.textContent = prioritySelect;
    option.id = prioritySelect

    select.appendChild(option);
    
    if (option.id === 'low'){
      option.style.color = 'green'
    }
    else if (option.id === 'medium')
      {
        option.style.color = 'yellow'
      }
      else
      {
        option.style.color = 'red'
      }
  }

}
//callback function for delete
function handleDelete(e){
  e.target.parentNode.remove();
}

let priority = ['low', 'medium', 'high']

