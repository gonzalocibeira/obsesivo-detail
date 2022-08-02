const cardDiv = document.querySelector("#cards");
let services = fetch("../json/servicesList.json")
                .then((response) => response.json())
                .then(data => myFunc(data));


function myFunc(data) {
    let serv = data["services"]["data"]["items"]
    for (val of serv){
        content = `<div class="card mx-2 mt-5" style="width: 18rem;">
                    <img src="../images/${val["image"]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${val["name"]}</h5>
                        <p class="card-text">${val["description"]}</p>
                        <p class="card-text">$${val["price"]}</p>
                        <a href="#" class="btn btn-dark">Consultar</a>
                    </div>
                </div>`;

        cardDiv.innerHTML += content;

    }

}


/* `<div class="card d-flex align-items-center justify-content-center mt-5 mx-2 p-2">
        <p>${val["name"]}</p>
        <p>${val["description"]}</p>
        <p>$${val["price"]}</p>
        </div>` */