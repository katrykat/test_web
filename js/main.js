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
function processData(data) {        
        for (var i = 1; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
function processData(data) {        
        for (var i = 2; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
function processData(data) {
        for (var i = 3; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}        
function processData(data) {
        for (var i = 4; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}        
function processData(data) {
        for (var i = 5; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}

// Products

//      Lighting  
function processData(data) {
	for (var i = 0; i < data.length; i++) {
	// Adding all the divs, images, titles, etc
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        // Adding titles
        $("#title"+i).append(data[i].title);
        // Adding img
        $("#img"+i).attr("src",data[i].img);
        // Adding alt attribute
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}       
function processData(data) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
//      Electricity   
function processData(data) {
	for (var i = 2; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        
function processData(data) {
	for (var i = 3; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}       
//      Electronics  
function processData(data) {
	for (var i = 4; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(data) {
	for (var i = 5; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Connectors          
function processData(data) {
	for (var i = 6; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(data) {
	for (var i = 7; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Gardens          
function processData(data) {
	for (var i = 8; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(data) {
	for (var i = 9; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Various          
function processData(data) {
	for (var i = 10; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(data) {
	for (var i = 11; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        
	}
}    
        
