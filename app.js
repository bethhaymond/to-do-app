function onReady(){
    const ADD_TODO_FORM = document.getElementById('addToDoForm');
    const NEW_TODO_TEXT = document.getElementById('newToDoText')
    const TODO_LIST = document.getElementById('toDoList');

    ADD_TODO_FORM.addEventListener('submit', (event) => {
      event.preventDefault();

      let title = NEW_TODO_TEXT.value;

      let newli = document.createElement('li'); // <li></li>
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', function(event){
        //console.log(event);
        //this.parentElement
        TODO_LIST.removeChild(this.parentElement);
      })

      newli.textContent = title;
      newli.appendChild(checkbox);
      newli.appendChild(deleteBtn);
      TODO_LIST.appendChild(newli);
      NEW_TODO_TEXT.value = "";
    });
  };

window.onload = function () {
  onReady();
};
