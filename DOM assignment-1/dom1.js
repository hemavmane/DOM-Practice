  document.querySelector(".class1").innerText="Hema Mane"
document.querySelector(".class2").innerHTML="<p>'I am Hema mane from Karnataka i am recently grauated from gug univesrsity in Electronics field,learning web development'</p>"
document.querySelector(".class3").style.color="red"
document.querySelectorAll(".divs")[0].style.border ="black solid"
document.querySelectorAll(".divs")[0].innerText="Fourth"
document.querySelectorAll(".divs")[1].style.border="black solid"
document.querySelectorAll(".divs")[1].innerText="Fifth"
document.querySelectorAll(".divs")[2].style.border="black solid"
document.querySelectorAll(".divs")[2].innerText="Sixth"



let createElement = document.createElement("span");
let  textnod = document.createTextNode("Aircampus");
createElement.appendChild(textnod);
document.getElementById("id1").appendChild(createElement);
document.querySelectorAll("div")[8].innerHTML= "<div class='new_htlm'><p>This is my first assignment</p> </div> "
document.querySelectorAll("div")[10].innerHTML="<h3>'My Experience with Aircampus'</h3>"
document.querySelectorAll("div")[10].style.textDecoration="underline"
document.querySelectorAll("div")[10].style.fontWeight="bold"
document.querySelectorAll("div")[10].style.fontSize="32px"
document.querySelectorAll("div")[10].style.color="darkgreen"
document.getElementsByTagName("p")[1].innerText="Aircampus made me think how we can apply logics in problem solving as well helped a lot in communication here most important things is that availability of mentors 24/7 hour for doubt solving. "




