let carouselPemuda = document.getElementById("carouselPemuda");
let carouselUmum = document.getElementById("carouselUmum");


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
    carouselUmum.classList.remove("active");
    carouselPemuda.classList.add("active");
}

function orangTuaActive(){
    carouselPemuda.classList.remove("active");
    carouselUmum.classList.add("active");
}