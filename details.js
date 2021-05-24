const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const getAllCameras = async function() {
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' + id);
        if (response.ok) {
            let camera = await response.json();

// Structure HTML //

            let window = document.getElementById("window");

            let productContenent = document.createElement("div");
            let productImage = document.createElement("img");
            let productName = document.createElement("h1");
            let productDescription = document.createElement("p");
            let productPrice = document.createElement("p");
            let productChoiceBar = document.createElement("div");
            let productChoiceTitle = document.createElement("p");
            let productChoice = document.createElement("select");
            let productQuantityBar = document.createElement("div");
            let productQuantityTitle = document.createElement("p");
            let productQuantity = document.createElement("input");
            let bottomButtons = document.createElement("div");
            let retourAccueil = document.createElement("a");
            let ajoutPanier = document.createElement("a");

// Attributs des balises //

            productContenent.setAttribute("id", "closeup");
            productImage.setAttribute("class", "imgcloseup");
            productImage.setAttribute("src", camera.imageUrl);
            productName.setAttribute("class", "producttitle");
            productDescription.setAttribute("class", "description");
            productPrice.setAttribute("class", "productprice");
            productChoiceBar.setAttribute("class", "productChoiceBar");
            productChoiceTitle.setAttribute("class", "productChoiceTitle");
            productChoice.setAttribute("class", "lenses");
            productQuantityBar.setAttribute("class", "productQuantityBar");
            productQuantityTitle.setAttribute("class", "productQuantityTitle");
            productQuantity.setAttribute("type", "number");
            productQuantity.setAttribute("class", "productQuantity");
            bottomButtons.setAttribute("class", "bottomButtons");
            retourAccueil.setAttribute("class", "retourAccueil");
            retourAccueil.setAttribute("href", "index.html");
            ajoutPanier.setAttribute("class", "ajoutPanier");
            ajoutPanier.setAttribute("href", "panier.html");

// Liens de parenté //

            window.appendChild(productContenent);
            productContenent.appendChild(productImage);
            productContenent.appendChild(productName);
            productContenent.appendChild(productDescription);
            productContenent.appendChild(productPrice);
            productContenent.appendChild(productChoiceBar);
            productContenent.appendChild(productQuantityBar);
            productContenent.appendChild(bottomButtons);
            productChoiceBar.appendChild(productChoiceTitle);
            productChoiceBar.appendChild(productChoice);
            productQuantityBar.appendChild(productQuantityTitle);
            productQuantityBar.appendChild(productQuantity);
            bottomButtons.appendChild(retourAccueil);
            bottomButtons.appendChild(ajoutPanier);


// Contenu des balises //

            productName.textContent = camera.name;
            productDescription.textContent = camera.description;
            productPrice.textContent = camera.price / 100 + " €";
            productChoiceTitle.textContent = "Lentille";
            productQuantityTitle.textContent = "Quantité";
            retourAccueil.textContent = "Retour à l'accueil";
            ajoutPanier.textContent = "Ajouter au panier";
            
            const lenses = camera.lenses;

            for (i = 0; i < lenses.length; i++) {
                const selectOption = document.createElement('option');
                productChoice.appendChild(selectOption);
                selectOption.textContent = lenses[i];
                selectOption.setAttribute("value", lenses[i]);
            }


            ajoutPanier.addEventListener("click", function (event) {
                event.preventDefault();

            // stockage des données du/des teddy souhaité dans localStorage

                let cameraChosen = [camera.imageUrl, camera._id, camera.name, camera.price, parseInt(productQuantity.value, 10)]

                let cart = JSON.parse(localStorage.getItem('cart'));
                
                if(cart) {
                    let existProduct = 0;
                    cart.forEach(element => {
                        if (element[1] == id) {
                            element[4] += parseInt(productQuantity.value, 10);
                            existProduct = 1;
                        }     
                    });

                    if (existProduct == 0) {
                        cart.push(cameraChosen);
                    }

                    localStorage.setItem('cart', JSON.stringify(cart));
                    
                } else {
                    
                    cart = [];
                    cart.push(cameraChosen);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(cart);
                }
            });
            window.location.href = "panier.html";
        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        } 
    } catch (error) {
        alert("Erreur : " + error);
    }
};

getAllCameras();




