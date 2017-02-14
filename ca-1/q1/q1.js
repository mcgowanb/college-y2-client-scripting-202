var bookCoverImage;
$(document).ready(function () {
    $("#add-book").on("click", function (e) {
        e.preventDefault();
        addBook();
        displayMessage("Book added to storage");
        clearfields();
    });

    $("#clear-list").on("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        displayMessage("Storage has been emptied.")
    });


    //drop zone for image
    var dz = document.getElementById('book-cover');

    dz.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }, false);

    dz.addEventListener('drop', dropFile, false);
});

//book object
function Book(name, author, isbn, publisher, price, image) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.publisher = publisher;
    this.price = price;
    this.image = image;
}

function addBook() {
    var name = $("#book-name").val();
    var author = $("#author").val();
    var isbn = $("#isbn").val();
    var publisher = $("#publisher").val();
    var price = $("#price").val();
    var image = "";

    //null check in case the book cover is not added
    if(bookCoverImage != null){
    image = bookCoverImage.src; //src
    }

    var book = new Book(name, author, isbn, publisher, price, image);
    localStorage.setItem(isbn, JSON.stringify(book));
}


function clearfields() {
    $("#book-name, #author, #isbn, #publisher, #price").val("");

    // var elem = document.createElement('p').setAttribute("class", "text-center");
    // console.log(elem);
    // elem.text = "Drop book cover here";
    $("#book-cover").children("img:first").remove();
    $("#book-cover").append("<p class='text-center'>Drop book cover here</p>");
    //book cover remove child
}

//simple display message that flashes in and out
function displayMessage(message) {
    $("#info-message").html(message).fadeIn("slow").delay(1000).fadeOut("slow");
}

function dropFile(e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    getSrcFromImage(file);
}

function getSrcFromImage(file) {
    var reader = new FileReader();
    reader.onload = function () {
        bookCoverImage = new Image();
        bookCoverImage.src = reader.result;
        var bookImage = document.getElementById('book-cover');
        bookImage.removeChild($("#book-cover > p").get(0));
        bookImage.appendChild(bookCoverImage);
    };
    reader.onerror = function () {
        alert("There was an error reading the file");
    };
    reader.readAsDataURL(file);
}
