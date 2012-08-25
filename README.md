jqLipsum - jQuery plugin 
========================

This is a jquery plugin which generates Lorem ipsum into the html content. Which could be very useful to keep main html codes clean.
The plugin is using http://json-lipsum.appspot.com/ to get the lorem ipsum text! So if you looking for an offline version please check http://sanderkorvemaker.nl/jquery/jLorem.php or https://github.com/thatcher/jquery-loremipsum.

Usage
-----

generate random text into document.body :
```javascript
$(document.body).jqLipsum();
```
generate random 10 paragraphs not starting with Lorem ipsum:
```javascript
$(document.body).jqLipsum('p',10,'paras','no');
```