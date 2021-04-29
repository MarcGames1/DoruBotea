const textContent = [" drept penal", " dreptul familiei", " drept civil",  " malpraxis medical", " dreptul muncii", " executari silite" ]
let index = 0


function changeText(){
    (index < textContent.length-1) ? index++ : index=0;
    document.querySelector(".dinamic").innerText= textContent[index]
}

setInterval(changeText, 3000);




 
