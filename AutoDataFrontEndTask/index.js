const api_url = 'https://jsonplaceholder.typicode.com/users';
/*
fetch(api_url).then(response => {
    console.log(response);
    return response.json();
}).then(response => {
    console.log(response);
})
*/
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    
    const html = data.map(user => {
        return `<tr><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td><button class="btn edit">Редактировать</button><button class="btn save">Сохранить</button><button class="btn delete">Удалить</button></td></tr>`
    }).join("");
    document.querySelector(".table").insertAdjacentHTML("beforeend", html);

    const editButtons = document.querySelectorAll(".edit");
    const saveButtons = document.querySelectorAll(".save");
    const deleteButtons = document.querySelectorAll(".delete");
    const table = document.querySelector(".table");
    console.log(table.firstChild);
    editButtons.forEach( button => {
        button.addEventListener('click', () => {
            const children =  button.parentElement.parentElement.children
            for (let i = 0; i < children.length - 1; i++) {
                children[i].contentEditable = "true";
                children[i].classList.add("editable");
            }
            button.style.display = "none";
            button.nextSibling.style.display = "inline";
        })
    })
    saveButtons.forEach( button => {
        button.addEventListener('click', () => {
            const children =  button.parentElement.parentElement.children
            for (let i = 0; i < children.length - 1; i++) {
                children[i].contentEditable = "false";
                children[i].classList.remove("editable");
            }
            button.style.display = "none";
            button.previousSibling.style.display = "inline";
        })
    })
    deleteButtons.forEach( button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.remove();
        })
    })
}

getData();
