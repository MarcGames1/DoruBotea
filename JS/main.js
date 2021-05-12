const whatsapp = document.querySelector('.whatsapp-cta')
const upArrow= document.querySelector(".buttonTop")
const sections = document.querySelectorAll("section")



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
