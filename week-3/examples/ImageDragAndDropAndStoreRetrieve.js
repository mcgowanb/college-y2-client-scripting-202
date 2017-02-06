// JavaScript Document
"use strict";
//1. How many IIFE's are in this file?
//2. How many functions are in this file?
(function addEvents()
{
	// Setup the dnd listeners.
	//Add an event listener for dragover so that when something is dragged over the dropZone (<div> element)
	//call the function handleDragOver
	document.getElementById('dropzone').addEventListener("dragover", handleDragOver, false);
	//Add an event listener for drop so that when something is dropped into the dropZone (<div> element)
	//call the function handleFileSelect
	document.getElementById('dropzone').addEventListener("drop", handleFileSelect, false);
	document.getElementById('retrieve').addEventListener("click", retrieveImage, false);
	document.getElementById('clear').addEventListener("click", clearStorage, false);
	document.getElementById('store').addEventListener("click", storeImage, false);
})();

function storeImage()
{
	//Get the contents of the image and store it in data
	var data = document.getElementById('dropzone').innerHTML;
	console.log(data);
	//Don't underestimate the importance of try/catch
	try{
		//Store the file in localStorage called "fileData"
		localStorage.setItem("fileData", data);
	}
	catch (e){
		//3. What does 'e' represent?
		console.log("Storage failed: " + e);
	}
}

function retrieveImage()
{
	//Retrieve the file and store it in data
	var data = localStorage.getItem("fileData");
	//Display the image in the <div> "filetoget"
	document.getElementById('filetoget').innerHTML = data;
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
	var file = evt.dataTransfer.files[0];
	writeFile(file);
}

function handleDragOver(evt) 
{
//	4. Find out specifically whar preventDefault does
//	Allow the browser to let us drag over the div
//	5. Use Chrome Dev tools and console.log to determine
//	the value of 'evt'
	console.log(evt);
    evt.preventDefault();
// 	Explicitly show this is a copy.	
//	6. What is dataTransfer?
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
		//Create an image
		var img = new Image();
		//Set the source to the image data
		img.src = reader.result;
		//append to the <div> dropzone
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