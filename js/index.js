const Container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

//eventos
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", ()=> {
        Container.classList.add("active")
        qrCodeBtn.innerHTML = "Código Criado!"
    })    
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){

        generateQrCode()
    }
})

qrCodeInput.addEventListener("keyup", ()=> {
    if(!qrCodeInput.value){
        Container.classList.remove("active")
        qrCodeBtn.innerHTML="Gerar QR Code"
    }
})