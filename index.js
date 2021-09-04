console.log("working");

// //constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function(book) {
    let tableBody = document.getElementById('tableBody');
    let uiscreen = ` <tr>

                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`

    tableBody.innerHTML += uiscreen;

}

Display.prototype.clear = function() {
    let lform = document.getElementById('lform');
    lform.reset();
}

Display.prototype.validate = function(book) {

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

}

Display.prototype.show = function(type, dmessage) {

    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Holy Message!</strong> ${dmessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    setTimeout(() => {
        message.innerHTML = "";
    }, 3000);

}

let lform = document.getElementById('lform');
lform.addEventListener('submit', lformsubmit);

function lformsubmit(e) {
    console.log('submit ok');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let api = document.getElementById('API');
    e.preventDefault();
    if (fiction.checked == true) {
        type = fiction.value;
    } else if (programming.checked == true) {
        type = programming.value;

    } else if (api.checked == true) {
        type = api.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Awesome book aded sucessfully!!');
    } else {
        display.show('danger', 'Soryy You cannot add book please chek credential again!!');
    }
    e.preventDefault();



}