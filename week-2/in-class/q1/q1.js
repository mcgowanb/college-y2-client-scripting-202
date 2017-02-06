(function () {
    document.getElementById('store').addEventListener("click", saveDetails, false);
    document.getElementById('clear').addEventListener("click", clearDetails, false);
    document.getElementById('get').addEventListener("click", getDetails, false);
})();

function studentDetails(name, course, Sid) {
    this.name = name;
    this.course = course;
    this.Sid = Sid
}

function clearDetails() {
    localStorage.clear();
}

function saveDetails() {
    var name = document.getElementById('name').value;
    var id = document.getElementById('std-id').value;
    var course = document.getElementById('course').value;
    var data = new studentDetails(name, course, id);
    saveDetailsToStorage(data);
}

function saveDetailsToStorage(data) {
    localStorage.setItem(data.Sid, JSON.stringify(data));
}

function getDetails() {
    for (var i = 0; i < localStorage.length; i++) {
        var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var message = "==========PRINTING STUDENT DETAILS==========\n";
        message += "Student Name: " + item.name + "\n";
        message += "Student ID: " + item.Sid + "\n";
        message += "Student Course: " + item.course + "\n\n";
        document.getElementById('output').innerText += message;
    }
}