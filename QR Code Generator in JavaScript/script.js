const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');
const qrContainer = document.querySelector('.qr-body');
let size=sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault(); /* it will prevent the form to submit.page won't refresh */
    isEmptyInput();
})

sizes.addEventListener('change',(e)=>{ /* to change size */
    size=e.target.value;
    generateQRCode();
})

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
function isEmptyInput(){
    // if(qrText.value.length>0)
    // {
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate to your qr code");
    // }

    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    })
}