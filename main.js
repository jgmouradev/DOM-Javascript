
document.getElementById("btn-inicio").addEventListener("click", function(){
  document.querySelector("body").setAttribute("class","inicio");
 document.querySelector("p").style.color ="black";

})

document.getElementById("btn-amarelo").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","amarelo");
   document.querySelector("p").style.color ="gray";

  })
  
  document.getElementById("btn-laranja").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","laranja");
    document.querySelector('p').style.color ='white';
    
  })
  
  document.getElementById("btn-verde").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","verde");
    document.querySelector('p').style.color ='black'
  })
  
  document.getElementById("btn-vermelho").addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","vermelho");
    document.querySelector('p').style.color ='yellow';
  })
  