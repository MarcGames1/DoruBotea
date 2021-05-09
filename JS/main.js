const textContent = [" drept penal", " dreptul familiei", " drept civil",  " malpraxis medical", " dreptul muncii", " executari silite" ]
const whatsapp = document.querySelector('.whatsapp-cta')
const upArrow= document.querySelector(".buttonTop")
const sections = document.querySelectorAll("section")

let index = 0
function changeText(){
    (index < textContent.length-1) ? index++ : index=0;
    document.querySelector(".dinamic").innerText= textContent[index]
}

setInterval(changeText, 3000);
setTimeout(addButtons, 5000)





  
  
 




  function removeClassOnElement (element, className)  {element.classList.remove(className)}
  function addClassOnElement (element, className)  {element.classList.add(className)}

 

function addButtons() {
  removeClassOnElement(upArrow, "hidden");
  removeClassOnElement(whatsapp, "hidden");
  
  // addClass(whatsapp, "appearSecondL");
}

function removeButtons() {
  addClassOnElement(upArrow, "hidden");
  addClassOnElement(whatsapp, "hidden");
}
