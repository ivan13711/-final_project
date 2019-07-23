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
  imgmercury.classList.toggle("pactive");
  if(textMer.classList.contains("activetext")) {
    textMer.classList.add("deactivetext");
    textMer.classList.remove("activetext");
  }
  else {
    textMer.classList.add("activetext");
    textMer.classList.remove("deactivetext");
  }
})
venus.addEventListener('click', function(){
  textVen.classList.toggle("hiddentext");
  imgvenus.classList.toggle("pactive");
  if( textVen.classList.contains("activetext")) {
      textVen.classList.add("deactivetext");
      textVen.classList.remove("activetext");
  }
  else {
      textVen.classList.add("activetext");
      textVen.classList.remove("deactivetext");
  }
})

earth.addEventListener('click', function(){
  textEarth.classList.toggle("hiddentext");
  imgearth.classList.toggle("pactive");
  if ( textEarth.classList.contains("activetext")) {
      textEarth.classList.add("deactivetext");
     textEarth.classList.remove("activetext");
  }
  else {
    textEarth.classList.add("activetext");
    textEarth.classList.remove("deactivetext");
  }
})
mars.addEventListener('click', function(){
  textMars.classList.toggle("hiddentext");
  imgmars.classList.toggle("pactive");
  if (  textMars.classList.contains("activetext")) {
        textMars.classList.add("deactivetext");
      textMars.classList.remove("activetext");
  }
  else {
    textMars.classList.add("activetext");
    textMars.classList.remove("deactivetext");
  }

})
jupiter.addEventListener('click', function(){
  textJupiter.classList.toggle("hiddentext");
  if ( textJupiter.classList.contains("activetext")) {
        textJupiter.classList.add("deactivetext");
      textJupiter.classList.remove("activetext");
  }
  else {
    textJupiter.classList.add("activetext");
    textJupiter.classList.remove("deactivetext");
  }
})
saturn.addEventListener('click', function(){
  textSaturn.classList.toggle("hiddentext");
;
  if (  textSaturn.classList.contains("activetext")) {
        textSaturn.classList.add("deactivetext");
      textSaturn.classList.remove("activetext");
  }
  else {
    textSaturn.classList.add("activetext");
    textSaturn.classList.remove("deactivetext");
  }

})
uran.addEventListener('click', function(){
  textUran.classList.toggle("hiddentext");

  if (   textUran.classList.contains("activetext")) {
        textUran.classList.add("deactivetext");
      textUran.classList.remove("activetext");
  }
  else {
    textUran.classList.add("activetext");
    textUran.classList.remove("deactivetext");
  }
})
neptune.addEventListener('click', function(){
  textNeptune.classList.toggle("hiddentext");

  if (    textNeptune.classList.contains("activetext")) {
        textNeptune.classList.add("deactivetext");
      textNeptune.classList.remove("activetext");
  }
  else {
    textNeptune.classList.add("activetext");
    textNeptune.classList.remove("deactivetext");
  }
})
