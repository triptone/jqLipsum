jqLipsum - jQuery plugin 
========================

This is a jquery plugin which generates Lorem ipsum into the html content. Which could be very useful to keep main html codes clean.

Usage
-----

generate random text into document.body :

$(document.body).jqLipsum();

generate random 10 paragraphs not starting width Lorem ipsum:

$(document.body).jqLipsum('p',10,'paras','no');