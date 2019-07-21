var s1 = document.getElementById ('s1');
var s2 = document.getElementById ('s2');
var s3 = document.getElementById ('s3');
var button = document.querySelector('.button');
var menu = document.querySelector('.menu');


button.addEventListener('click', function(){
   s1.classList.toggle("stripes1");
   s1.classList.toggle("buttomActiveSt1");
   s2.classList.toggle("stripes2");
   s2.classList.toggle("buttomActiveSt2");
   s3.classList.toggle("stripes3");
   s3.classList.toggle("buttomActiveSt3");
  if(menu.classList.contains("menuAnim")) {
    menu.classList.remove("menuAnim");
    menu.classList.add("menubacAnim");
  }
  else{
    menu.classList.add("menuAnim");
    menu.classList.remove("menubacAnim");
  };

 }
)
