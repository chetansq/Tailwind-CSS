
// let add = '';
// let id_ = 1;
// let d = `p${id_}`;
// console.log(d);

// function create_() {
//     if (add == '') {
//         if (document.getElementById('text').value != "") {


//             var div = document.createElement("div");
//             div.classList = `flex justify-between items-center`;
//             div.innerHTML = `<p class="paragraph" id="p${id_}">${document.getElementById('text').value}</p><i class="fa-solid fa-pen-to-square editButton"></i>
//             <i class="fa-solid fa-xmark deleteButton"></i>`;

//             document.getElementById("wrapper").appendChild(div);

//             document.getElementById('text').value = "";
//         }
//         else {
//             alert("ENTER THE VALID INPUT");
//         }
//     }
//     else {
//         console.log("value 1", text.value);

//         document.getElementById(`p${id_}`).innerText = text.value;
//         console.log("value 2", text.value);
//         // document.getElementById("1").id += 1;
//         document.getElementById('text').value = "";
//         id_++;

//     }
// }

// document.getElementById("wrapper").addEventListener("click", (remove_) => {
//     if (remove_.target.classList.contains("deleteButton")) {
//         remove_.target.parentElement.remove();
//     }
// })


// document.getElementById("wrapper").addEventListener("click", (addnew_) => {
//     if (addnew_.target.classList.contains("editButton")) {
//         text.value = addnew_.target.parentElement.innerText;
//         add = text.value;
//     }
// })




// access input field
const input = document.querySelector('#todo-input');

// Listening to the click event from the "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
    // value of the input field
    const inputData = input.value;
    input.value = "";

    // creating todo item element
    const todo_el = document.createElement('div');
    todo_el.classList.add('todo-item');

    const todo_content_el = document.createElement('div');
    todo_el.appendChild(todo_content_el);

    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text');
    todo_input_el.type = 'text';
    todo_input_el.value = inputData;
    todo_input_el.setAttribute('readonly', 'readonly');

    todo_content_el.appendChild(todo_input_el);

    const todo_actions_el = document.createElement('div');
    todo_actions_el.classList.add('action-items');

    const todo_done_el = document.createElement('i');
    todo_done_el.classList.add('fa-solid');
    todo_done_el.classList.add('fa-check');

    const todo_edit_el = document.createElement('i');
    todo_edit_el.classList.add('fa-solid');
    todo_edit_el.classList.add('fa-pen-to-square');
    todo_edit_el.classList.add('edit');

    const todo_delete_el = document.createElement('i');
    todo_delete_el.classList.add('fa-solid');
    todo_delete_el.classList.add('fa-trash');

    todo_actions_el.appendChild(todo_done_el)
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);

    todo_el.appendChild(todo_actions_el);
    console.log(todo_el)
    // add the todo-item to lists
    document.querySelector('.todo-lists').appendChild(todo_el);

    // done functionality
    todo_done_el.addEventListener('click', () => {
        todo_input_el.classList.add('done')
        todo_el.removeChild(todo_actions_el);
    })

    // edit functionality
    todo_edit_el.addEventListener('click', (e) => {
        if (todo_edit_el.classList.contains("edit")) {
            todo_edit_el.classList.remove("edit");
            todo_edit_el.classList.remove("fa-pen-to-square");
            todo_edit_el.classList.add("fa-x");
            todo_edit_el.classList.add("save");
            todo_input_el.removeAttribute("readonly");
            todo_input_el.focus();
        } else {
            todo_edit_el.classList.remove("save");
            todo_edit_el.classList.remove("fa-x");
            todo_edit_el.classList.add("fa-pen-to-square");
            todo_edit_el.classList.add("edit");
            todo_input_el.setAttribute("readonly", "readonly");
        }
    });

    // delete functionality
    todo_delete_el.addEventListener('click', (e) => {
        console.log(todo_el);
        document.querySelector('.todo-lists').removeChild(todo_el);
    });
})



