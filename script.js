var aanbevolenbutton = document.querySelector('nav > button');
var filterbutton = document.querySelector('nav > button:nth-of-type(2)');
var filtersection = document.querySelector('form:nth-of-type(2)');

//var aanbevolenbutton = active


aanbevolenbutton.addEventListener('click', function(){
   
    aanbevolenbutton.classList.toggle('active');
    filterbutton.classList.toggle('active');
    filtersection.classList.toggle('show');
    
});

filterbutton.addEventListener('click', function(){
   
    filterbutton.classList.toggle('active');
    aanbevolenbutton.classList.toggle('active');
    filtersection.classList.toggle('show');
});




