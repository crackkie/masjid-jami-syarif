import { loadHeader } from "/js/component/header.js";
import { loadFooter } from "/js/component/footer.js";

async function init(){
    try{
        await Promise.all([
            loadHeader(),
            loadFooter()
        ])
    }
    catch(error){
        console.error(error);
    }
}

init();