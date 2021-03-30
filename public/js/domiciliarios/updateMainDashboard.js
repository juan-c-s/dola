export function updateDomicil(info){
    populateDomiciliariosList(info)
}

function populateDomiciliariosList(info){
    let finalHTL = ``
    let contador = 0;

    for(let domiciliario of info){
        contador++;
        finalHTL = finalHTL + createDomiciliarioEntry(domiciliario,contador)
    }

    document.getElementById('containerOfDomiciliariosEntry').innerHTML = finalHTL;

}


function createDomiciliarioEntry(domiciliario,contador){

    return `  
    <div class="itemContainer">

        <div class="itemcontainer-sub">
        
            <div class="iteamRight">
                <p>${domiciliario.name}</p>
                <p>#${contador}</p>
            </div>

        </div>

    </div>`

}