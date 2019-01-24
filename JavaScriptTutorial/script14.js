//jQuery(document).ready(function () {
//    //start up code goes here
//    alert("this works!");
//});

//similar code:

$(function () {
    //start up code goes here
    //alert("this works!");

    //How to change text with jQuery
    $("#title").text("Yay. I can not get to H1 immediately");

    //How to add HTML using jQuery
    //$("#first").html("<h2>Great Quotes</h2>");


    $("#first").prepend("<h2>Great Quotes</h2>");
    $("#first").append("<h3>For you to ponder</h3>");

    //changing attributes of DOM:
    $("#myAnchor").attr("href", "http://channel9.msdn.com");

    $("#title").addClass("standout");

});

//$('.importantText'); //Will return a jQuery object of collection of DOM that have that label or are in that class
//$('#myFirstParagraph');//return the DOM with that ID
//$('p').fadeOut(); //Get all paragraphs and fade them out.

////attach html code dynamically using jQuery
//jQuery('<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"</div>');


//$.myCustomerMethod = function () { alert('hi'); };

//$.listBox = {
//    show: function () { },
//    hide: function () { },
//    position: function () { },
//    initiate: function () { }
//};

