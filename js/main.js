const cardDiv = document.querySelector("#cards");
const galleryDiv = document.querySelector("#galeriaCarousel");
let btnCons = [];
const numWsapp = "541151113625"; // Wsapp number goes here 


let services = fetch("../json/servicesList.json")
                .then((response) => response.json())
                .then(data => createCards(data["services"]["data"]["items"]));

let galleryImages = fetch("../json/galleryImages.json")
                    .then((response) => response.json())
                    .then(data => createImages(data["images"]));


function createCards(data) {
    for (val of data){
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

    };

    btnCons = document.querySelectorAll(".consultar");

};

function createImages(data){
    let isActive = "active";
    for (val of data){
        content = `<div class="carousel-item ${isActive}">
                        <img src="../images/${val["img"]}" class="d-block mx-auto slideImg" alt="${val["alt"]}">
                    </div>`;

        galleryDiv.innerHTML += content;
        if (isActive == "active"){isActive = ""};
    };
};

function consultaWsapp(producto){
    let wsappLink =  `https://wa.me/${numWsapp}?text=Hola!%20Queria%20consultarte%20sobre%20${producto}`;
    window.open(wsappLink);
};

function addEventConsulta(element){
    element.addEventListener("click", function () {consultaWsapp(this.dataset.wsapp)})
};


setTimeout(function (){btnCons.forEach(addEventConsulta)}, 300);
