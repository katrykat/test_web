$(document).ready(function() {
	$.ajax({
        url: "categories.json",
        dataType: "json",
        success: function(data) {
        	processData(data);      	
        }
     });    
});

//Categories

function processData(data) {
	for (var i = 0; i < data.length; i++) {
		// Adding all the divs, images, titles, etc
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        // Adding titles
        $("#title"+i).append(data[i].title);
        // Adding img
        $("#img"+i).attr("src",data[i].img);
        // Adding alt attribute
        $("#img"+i).attr("alt",data[i].title+" Section");
    }
}

//