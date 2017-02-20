/*
 resources used for this are
 http://stackoverflow.com/
 http://api.jquery.com/
 https://www.w3schools.com/
 All resources were used as general references for this project
 */
var bookCoverImage;
$(document).ready(function () {
    $("#add-book").on("click", function (e) {
        e.preventDefault();
        addBook();
        displayMessage("Book added to storage");
        clearfields();
    });


    $(".clear-list").on("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    });


    //drop zone for image If the element doesn't exist (as in the second page, don't add a listner)
    var dz = document.getElementById('book-cover');
    if (dz != null) {
        dz.addEventListener('dragover', function (e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }, false);

        dz.addEventListener('drop', dropFile, false);
    }

    $("#delete-by-name").on("click", removeBookByName);
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
    if (bookCoverImage != null) {
        image = bookCoverImage.src; //src
    }

    var book = new Book(name, author, isbn, publisher, price, image);
    localStorage.setItem(isbn, JSON.stringify(book));
}

/*
 Remove the field contents, clear the image and replace the text for dropping image
 */
function clearfields() {
    $("#book-name, #author, #isbn, #publisher, #price").val("");
    $("#book-cover").children("img:first").remove();
    $("#book-cover").append("<p class='text-center'>Drop book cover here</p>");
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

/*
 Clone the div for display. remove the clone class, add contents and insert into the dom
 */
function displayBooks() {
    //loop through each book and add them to the element
    for (var i = 0; i < localStorage.length; i++) {
        //clone elements
        var idCounter = "book-" + i;
        var element = $(".book-record").clone().removeAttr("style").attr("id", idCounter).appendTo(".book-display");
        // remove the class from the element to prevent double records getting created
        element.removeClass("book-record");
        var key = localStorage.key(i);
        var book = JSON.parse(localStorage.getItem(key));

        var infoBlock = $("#" + idCounter).find('#book-info');

        //create list of details for book information
        var bookKeys = ["name", "author", "isbn", "publisher", "price"];
        $.each(bookKeys, function (index, value) {
            var content = value + " : " + book[value];
            $(infoBlock).append("<li>" + content + "</li>");
        });

        if (book.image != "") {
            // only add image if the source is not null
            $("#" + idCounter).find('#book-image').attr("src", book.image);
        }

        //add key to the button so it can identify the book and get the isbn
        $("#" + idCounter).find('#delete').attr("rel", book.isbn).attr("pos", i);
    }
}

/*
 remove the item from local storage and hide the div in the dom
 */
function removeBook(e) {
    var isbn = $(e).attr("rel");
    var counter = $(e).attr("pos");
    localStorage.removeItem(isbn);
    $("#book-" + counter).fadeOut("slow");
}


/*
 remove book from local storage by name
 */
function removeBookByName() {
    var bookName = $("#book-delete-title").val();
    for (var i = 0; i < localStorage.length; i++) {
        //search through local storage an see if there's a match for name
        //if there is, remove it from local storage and reload the page
        var key = localStorage.key(i);
        var book = JSON.parse(localStorage.getItem(key));
        if (bookName == book.name) {
            localStorage.removeItem(key);
            window.location.reload();
        }
    }
}