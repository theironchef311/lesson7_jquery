/*
Program Name: Recipe Display Application
Author: Richard Morrow
Due Date: 4 December 2018
Filename: script.js
*/

/* global $ */

//displays the next element after the current target
function display(event) 
{
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display function

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);