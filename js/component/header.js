export async function loadHeader(){
    const element = document.getElementById("header");
    if (!element){
        throw  new Error("Element tidak di temukan");
    }
        
    const response = await fetch("/component/header.html")
    if (!response.ok){
        throw Error(`Gagal mengambil file: ${response.status}`);
    }
    
    const data = await response.text();
    element.innerHTML = data;
    
}