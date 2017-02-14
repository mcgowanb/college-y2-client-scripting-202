// JavaScript Document
"use strict";

(function addEvents()
{
	document.getElementById('store').addEventListener("click", storeImage, false);
	document.getElementById('retrieve').addEventListener("click", retrieveImage, false);
	document.getElementById('clear').addEventListener("click", clearStorage, false);
	// Setup the dnd listeners.
	document.getElementById('dropzone').addEventListener("dragover", handleDragOver, false);
	document.getElementById('dropzone').addEventListener("drop", handleFileSelect, false);
})();

function storeImage()
{
	var imageToStore = document.getElementById('imagetostore');
	// Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = imageToStore.width;
    canvas.height = imageToStore.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imageToStore, 0, 0);
	var dataURL = canvas.toDataURL("image/jpg");
	try{
		localStorage.setItem("imgData", dataURL);
	}
	catch (e) {
		console.log("Storage failed: " + e);
	}
}

function retrieveImage()
{
	var dataImage = localStorage.getItem('imgData');
	if (dataImage !== null)
	{
		var displayImg = document.getElementById('imgtoget');
		displayImg.src = dataImage;
	}
	else
	{
		document.getElementById('imgtoget').src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";
	}
}

function clearStorage()
{
	localStorage.clear();
}


function handleFileSelect(evt) 
{
//	If you comment out this line the onerror event will be activated 
//	The browser will try to prevent us from dropping so prevent it from doing this	
    evt.preventDefault();

    var file = evt.dataTransfer.files[0]; // FileList object.
	writeFile(file);
	
}

function handleDragOver(evt) 
{
//	Allow the browser to let us drag over the div
    evt.preventDefault();
// 	Explicitly show this is a copy.	
    evt.dataTransfer.dropEffect = 'copy'; 
}

function writeFile(file)
{
	//FileReader allows us to read the contents of a file on the computer
	var reader = new FileReader();
	//onload is activitated only when we have 
	//read the entire contents of the file
	//We need this as we only want to display the contents of a file after we have successfully read it.
	reader.onload = function() 
	{  
	//	Display the contents of the file - what is the difference between innerHTML and innerText
		var img = new Image();
		img.src = reader.result;
		img.setAttribute("id", "imagetostore");
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