let carouselPemuda = document.getElementById("carouselPemuda");
let carouselOrangTua = document.getElementById("carouselOrangTua");


function salinRekening(button, data){
    navigator.clipboard.writeText(data).then(()=>{
        const icon = document.getElementById('salinIcon');
        icon.classList.add('hide');

        const textBtn = button.innerText;
        button.innerText = "✓ Tersalin";

        setTimeout(()=>{
            icon.classList.remove('hide');
            button.innerText = textBtn;
        },3000);
    });
}


function pemudaActive(){
    carouselOrangTua.classList.remove("active");
    carouselPemuda.classList.add("active");
    console.info("Pemuda aktiv")
}

function orangTuaActive(){
    carouselPemuda.classList.remove("active");
    carouselOrangTua.classList.add("active");
}