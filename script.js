const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const button = document.querySelector("#add-btn");
const bookList = document.querySelector("#book-list")


button.addEventListener("click", function () {
    if(titleInput.value == "" && 
    authorInput.value == ""
    ){
        alert("Enter input text");
    }else {
        const bookListRow = document.createElement("tr");

        const newTitle = document. createElement("th");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);

        const newAuthor = document. createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);

        bookList.appendChild(bookListRow);
    }
});