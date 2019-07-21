var stop = document.querySelector('.stop');
var mercury = document.querySelector('.mercury');
var textMer = document.getElementById ('textMer');
var textVen = document.getElementById ('textVen');
var textEarth = document.getElementById ('textEarth');
var textMars = document.getElementById ('textMarth');
var textJupiter = document.getElementById ('textJupiter');
var textSaturn = document.getElementById ('textSaturn');
var textUran = document.getElementById ('textUran');
var textNeptune  = document.getElementById ('textNeptune');

var venus = document.querySelector('.venus');
var earth = document.querySelector('.earth');
var mars = document.querySelector('.mars');
var jupiter = document.querySelector('.jupiter');
var saturn = document.querySelector('.saturn');
var uran = document.querySelector('.uran');
var neptune = document.querySelector('.neptune');
var pl = document.getElementById ('pl');
var st = document.getElementById ('st');
var imgmercury = document.getElementById ('imgmercury');
var imgvenus = document.getElementById ('imgvenus');
var imgearth = document.getElementById ('imgearth');
var imgmars = document.getElementById ('imgmars');


stop.addEventListener('click', function(){
  pl.classList.toggle("hidden");
  st.classList.toggle("hidden");
mercury.classList.toggle("mercorbit");
venus.classList.toggle("venusorbit");
earth.classList.toggle("earthorbit");
mars.classList.toggle("marsorbit");
jupiter.classList.toggle("jupiterorbit");
saturn.classList.toggle("saturnorbit");
uran.classList.toggle("uranorbit");
neptune.classList.toggle("neptuneorbit");
});
mercury.addEventListener('click', function(){
  textMer.classList.toggle("hiddentext");
  textMer.classList.toggle("activetext");
  imgmercury.classList.toggle("pactive");
})
venus.addEventListener('click', function(){
  textVen.classList.toggle("hiddentext");
  textVen.classList.toggle("activetext");
  imgvenus.classList.toggle("pactive");
})
earth.addEventListener('click', function(){
  textEarth.classList.toggle("hiddentext");
  textEarth.classList.toggle("activetext");
  imgearth.classList.toggle("pactive");
})
mars.addEventListener('click', function(){
  textMars.classList.toggle("hiddentext");
  textMars.classList.toggle("activetext");
  imgmars.classList.toggle("pactive");
})
jupiter.addEventListener('click', function(){
  textJupiter.classList.toggle("hiddentext");
  textJupiter.classList.toggle("activetext");

})
saturn.addEventListener('click', function(){
  textSaturn.classList.toggle("hiddentext");
  textSaturn.classList.toggle("activetext");

})
uran.addEventListener('click', function(){
  textUran.classList.toggle("hiddentext");
  textUran.classList.toggle("activetext");
})
neptune.addEventListener('click', function(){
  textNeptune.classList.toggle("hiddentext");
  textNeptune.classList.toggle("activetext");

})
