/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let x = document.querySelectorAll(".bot-header  nav ul  li")
   x.forEach(li => li.classList.toggle('responsive'))
}

