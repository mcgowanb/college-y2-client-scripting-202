// JavaScript Document
"use strict";
//IIFE
(function()
{
	// Setup the dnd listeners.
	var dropZone = document.getElementById('dropzone');
	//Add an event listener for dragover so that when something is dragged over the dropZone (<pre> element)
	//call the function handleDragOver
	dropZone.addEventListener('dragover', handleDragOver, false);
	//Add an event listener for drop so that when something is dropped into the dropZone (<pre> element)
	//call the function handleFileSelect
	dropZone.addEventListener('drop', handleFileSelect, false);
	document.getElementById('store').addEventListener("click", storeFile, false);
	document.getElementById('retrieve').addEventListener("click", retrieveFile, false);
	document.getElementById('clear').addEventListener("click", clearStorage, false);
})();

function storeFile()
{
	//Store the file using localStorage
	//innerText retrieves and sets the content of the tag as plain text, whereas innerHTML retrieves and sets the same content but in HTML format.
	var data = document.getElementById('dropzone').innerHTML;
	try{
		//Store the file in "fileData"
		localStorage.setItem("fileData", data);
	}
	catch (e){
		//If an error occurs, log it in the console
		console.log("Storage failed: " + e);
	}
}

function retrieveFile()
{
	//Store the retrieved file in data
	var data = localStorage.getItem('fileData');
	var image = new Image();
	image.src = data;
	document.getElementById('image-loc').appendChild(image);
}

function clearStorage()
{
	//Clear all localStorage (we could use localStorage.removeItem()
	localStorage.clear();
}


function handleFileSelect(evt) 
{
	//This function will only be called when you drop a file or files in <pre>
	//If you drop two files seperately the console will show the function
	//being called twice
	console.log('In function handleFileSelect and evt is ' + evt);
//	If you comment out this line the onerror event will be activated 
//	The browser will try to prevent us from dropping so prevent it from doing this	
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
	console.log('File list is ' + files);
	for(var i=0; i<files.length; i++)
	{
		//Display the contents of the files one by one.
		//Pass down one file at a time
		writefiles(files[i]);
	}
}

function handleDragOver(evt) 
{
	//The number of times this function is called depends on
	//how much time you spend hovering/moving files over the drop zone (the <pre> element)
	console.log('In function handleDragOver and evt is ' + evt);
//	Allow the browser to let us drag over the pre
    evt.preventDefault();
// 	Explicitly show this is a copy.	
    evt.dataTransfer.dropEffect = 'copy'; 
}

function writefiles(file)
{
	//FileReader allows us to read the contents of a file on the computer
	var reader = new FileReader();
	//onload is activitated only when we have 
	//read the entire contents of the file
	//We need this as we only want to display the contents of a file after we have successfully read it.
	reader.onload = function() 
	{
		var img = new Image();
	//	Display the contents of the file
		img.src = reader.result;
        document.getElementById('dropzone').appendChild(img);
   	};
	reader.onerror = function()
	{
		//onerror is an event handler for FileReader
		alert("There was an error reading the file");
	};
	//Read the contents of the file and put the contents into the result attribute.
	//Once this task is complete, the onload event will be activated. 
   	reader.readAsDataURL(file);
}