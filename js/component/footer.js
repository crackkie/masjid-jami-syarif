export async function loadFooter(){
    const element = document.getElementById("footer");
    if (!element){
        throw  new Error("Element tidak di temukan");
    }
        
    const response = await fetch("/component/footer.html")
    if (!response.ok){
        throw Error(`Gagal mengambil file: ${response.status}`);
    }
    
    const data = await response.text();
    element.innerHTML = data;
    
}