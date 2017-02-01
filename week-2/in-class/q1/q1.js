(function(){
   document.getElementById('store').addEventListener("click", saveDetails, false);
   document.getElementById('clear').addEventListener("click", clearDetails, false);
   document.getElementById('get').addEventListener("click", getDetails, false);
})();

function StudentDetails(name, course, Sid) {
    this.name = name;
    this.course = course;
    this.Sid = Sid
}

function clearDetails(){
    localStorage.clear();
}

function saveDetails(){
    var name = document.getElementById('name');
    var id = document.getElementById('std-id');
    var course = document.getElementById('course');
    var data = new StudentDetails(name, id, course);
    saveDetailsToStorage(data);
}

function saveDetailsToStorage(data){
    localStorage.setItem(data.Sid, data);
}

function getDetails(){
    var l = localStorage.length;
}