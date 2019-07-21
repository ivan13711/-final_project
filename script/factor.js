var cont = document.querySelector('.content');
var sun = document.querySelector('.sun');
var moon = document.querySelector('.moon');
var wind = document.querySelector('.wind');
var relief = document.querySelector('.relief');
var flow = document.querySelector('.flow');
var sunA = document.getElementById ('sunA');
var moonA = document.getElementById ('moonA');
var windA = document.getElementById ('windA');
var reliefA = document.getElementById ('reliefA');
var flowA = document.getElementById ('flowA');
var article = document.querySelector('article');
sun.addEventListener('click', function(){
  sunA.classList.toggle("animaitarticle");
})
moon.addEventListener('click', function(){
  moonA.classList.toggle("animaitarticle");
})
wind.addEventListener('click', function(){
  windA.classList.toggle("animaitarticle");
})
relief.addEventListener('click', function(){
  reliefA.classList.toggle("animaitarticle");
})
flow.addEventListener('click', function(){
  flowA.classList.toggle("animaitarticle");
})
