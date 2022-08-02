const cardDiv = document.querySelector("#cards");
let services = fetch("../json/servicesList.json")
                .then((response) => response.json())
                .then(data => myFunc(data));


function myFunc(data) {
    let serv = data["services"]["data"]["items"]
    for (val of serv){
        content = `<div class="card cardServ mx-2 mt-5">
                    <img src="../images/${val["image"]}" class="card-img-top" alt="${val["alt"]}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${val["name"]}</h5>
                        <p class="card-text">${val["description"]}</p>
                        <p class="card-text">$${val["price"]}</p>
                        <a href="#" class="btn btn-dark">Consultar</a>
                    </div>
                </div>`;

        cardDiv.innerHTML += content;

    }

}