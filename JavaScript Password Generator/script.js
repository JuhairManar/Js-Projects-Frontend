let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let Numbers=document.getElementById("Numbers");
let symbols=document.getElementById("symbols");
let genBTN=document.getElementById("genBTN");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
})

genBTN.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let allnumbers="0123456789";
let allsymbols="~!@#$%^&*()-_=+[{]}\|;:',<.>/?";

// function generatePassword(){
//     let genPassword="";
//     let allchars="";
//     allchars+=lowercase.checked?lowerchars:"";
//     allchars+=uppercase.checked?upperchars:"";
//     allchars+=Numbers.checked?allnumbers:"";
//     allchars+=symbols.checked?allsymbols:"";
    
//     if (allchars.length==0)
//     {
//         return genPassword;
//     }

//     let i=1;
//     while(i<=sliderValue.innerHTML)
//     {
//         genPassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
//         i++;
//     }
//      /* Math.random();this generates any random number between 0 and 1 */
//     return genPassword;
// }

function generatePassword() {
    let genPassword = "";
    let allchars = "";
    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += Numbers.checked ? allnumbers : "";
    allchars += symbols.checked ? allsymbols : "";

    if (allchars.length == 0) {
        return genPassword;
    }

    // Ensure at least one character from each selected character set
    genPassword += lowercase.checked ? getRandomChar(lowerchars) : "";
    genPassword += uppercase.checked ? getRandomChar(upperchars) : "";
    genPassword += Numbers.checked ? getRandomChar(allnumbers) : "";
    genPassword += symbols.checked ? getRandomChar(allsymbols) : "";

    // Generate the remaining characters
    let i = genPassword.length + 1;
    while (i <= sliderValue.innerHTML) {
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }

    // Shuffle the generated password to randomize the order of selected characters
    genPassword = genPassword.split('').sort(() => Math.random() - 0.5).join('');

    return genPassword;
}

function getRandomChar(charSet) {
    return charSet.charAt(Math.floor(Math.random() * charSet.length));
}


copyIcon.addEventListener('click',()=>{
    if(passBox.value.length >0)
    {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
}
);

// copyIcon.addEventListener('click', () => {
//     if (passBox.value != "" || passBox.value.length >= 1) {
//         navigator.clipboard.writeText(passBox.value);
//         copyIcon.innerText = "check";
//         copyIcon.title = "Password Copied";

//         setTimeout(() => {
//             copyIcon.innerHTML = "content_copy";
//             copyIcon.title = "";
//         }, 3000);
//     }
// });
