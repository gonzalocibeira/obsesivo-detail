const cardDiv = document.querySelector("#cards");
let btnCons = [];
const numWsapp = "541151113625"; // Wsapp number goes here 


let services = fetch("../json/servicesList.json")
                .then((response) => response.json())
                .then(data => createCards(data))


function createCards(data) {
    let serv = data["services"]["data"]["items"]
    for (val of serv){
        content = `<div class="card cardServ mx-2 mt-5 border">
                    <img src="../images/${val["image"]}" class="card-img-top" alt="${val["alt"]}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${val["name"]}</h5>
                        <p class="card-text">${val["description"]}</p>
                        <p class="card-text">$${val["price"]}</p>
                        <button class="btn btn-dark consultar" data-wsapp="${val["wsapp"]}">Consultar</button>
                    </div>
                </div>`;

        cardDiv.innerHTML += content;

    }

    btnCons = document.querySelectorAll(".consultar");

}

function consultaWsapp(producto){
    let wsappLink =  `https://wa.me/${numWsapp}?text=Hola!%20Queria%20consultarte%20sobre%20${producto}`;
    window.open(wsappLink);
};

function addEventConsulta(element){
    element.addEventListener("click", function () {consultaWsapp(this.dataset.wsapp)})
};


setTimeout(function (){btnCons.forEach(addEventConsulta)}, 300);
