"use strict";
$(document).ready(function(){
	//1. Use the console to display the number of table rows in the table
	console.log($('table tr').length + ' elements!');
	
	//2. Use the console to display the number of cells in the table
    console.log($('table td').length + ' elements!');
	
    //3. When the home link is clicked, append a new row to the end of the table, use append()
	$('li:first').click(function(){
		$('tbody').append("<tr><td>0321</td><td>Brendatron  (<a href='#'>press</a>)</td><td>arist</td><td>Sligo</td><td>$49.95</td></tr>");
	});
	
	//4. When the second h2 element is clicked, add the class .comment
	$("h2:eq(1)").click(function() {
		$("#content > div:last").addClass("comment");
	});
	
	//5. When the first h2 element is double clicked, remove the class '.comment'
	$("h2:first").one("dblclick", function(){
		$("#comment").removeClass("comment");
	});
	
	
	//6. When a key is pressed on the body, loop through the four <li> elements as follows:
	//1. for the first one, make the border dashed and set the link to apple.ie
	//2. For the second one make the border ridged and set the link to dell.ie
	//3. For the third one set the link to itsligo.ie and change the link text to 'link has changed
	//4. For the fourth one, set the link to microsoft.ie and set the colour of the link to red
	$("body").keypress(function(){
		$("li").each(function(i) {
			if(i===0)
			{
    			$(this).css("border", "dashed");
				$(this).children("a").attr("href", "http://www.apple.ie");
			}
			if(i===1)
			{
				$(this).css("border","ridge");
				$(this).children("a").attr("href", "http://www.dell.ie");
			}
			if(i===2)
			{
				$(this).children("a").attr("href", "http://www.itsligo.ie");
				$(this).children("a").text("Link has changed");
			}
			if(i===3)
			{
				$(this).children("a").css("color", "#ff0000");
				$(this).children("a").attr("href", "http://www.microsoft.ie");
			}
  		});
	});
	
	//7. When the page is about to be closed, display a message 'Are you sure you want to leave?'
	$(window).on("beforeunload", function(){
          return 'Are you sure you want to leave?';
    });
	
	//8. When the textbox is clicked, make all even rows in the table have a background colour of blue
	//and all odd rows have a background colour of yellow
	$("input:text").click(function() {
		$('#celebs tbody tr:even').css("background-color", "#4077ab");
		$('#celebs tbody tr:odd').css("background-color", "#d6f306");
	});
	
	//9. When a table row is clicked, delete that row and set the background colour of all other rows to white. Before deleting the row, display the contents of the first cell in the row
	$("#celebs tbody tr").click(function() {
		alert($(this).children("td").html());
		$(this).remove();
		$('#celebs tbody tr').css("background-color", "#ffffff");
	});
	
	//10. When the mouse enters the text area, prevent the links from working (assume step 6 has been completed)
	$("textarea").mouseenter(function(){
		$("a").attr("href", "#");
	});
	
	//11. When the footer is clicked add the class dashed to the table cells in the div 'celebs'
	$("#footer").click(function(){
		$("#celebs tbody tr td").addClass("dashed");
	});
	
	//12. When the first h1 is clicked toggle the container over a period of 5 seconds, and toggle agaon
	$("h1:first").click(function(){
		$("#container").toggle(5000);
		$("#container").toggle(5000);
	});
	
	//13. When text is typed into the textarea, (keyup) - replace the text in the id "fine_print" with the text typed, letter by letter
	$("textarea").keyup(function() {
		var value = $(this).val();
    	$("#fine_print").text(value);
	});
	
	//14. When the textbox loses focus (focusout) - make the contents of the textbox uppercase
	$("input:text").focusout(function() {
		var upper = $(this).val().toUpperCase();
        $("input:text").val(upper);
    });
});