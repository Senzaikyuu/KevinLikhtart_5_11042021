// Lien avec l'API //

const getAllCameras =  async function() {
        try {
                let response = await fetch('http://localhost:3000/api/cameras/');
                if (response.ok) {
                        let cameras = await response.json();

// Structure HTML //

                        for (let camera of cameras) {
                                let products = document.getElementById("products");

                                let productContenent = document.createElement("div");
                                let productImage = document.createElement("img");
                                let productInformation = document.createElement("div");
                                let productName = document.createElement("h3");
                                let productPrice = document.createElement("p");
                                let productPath = document.createElement("a");

// Attributs des balises //

                                productContenent.setAttribute("class", "vignette");
                                productImage.setAttribute("class", "img");
                                productImage.setAttribute("src", camera.imageUrl);
                                productInformation.setAttribute("class", "vtxtalign");
                                productName.setAttribute("class", "nom");    
                                productPrice.setAttribute("class", "price");
                                productPath.setAttribute("href", "details.html?id=" + camera._id);

// Liens de parenté //

                                products.appendChild(productContenent);
                                productContenent.appendChild(productImage);
                                productContenent.appendChild(productName);
                                productContenent.appendChild(productInformation);
                                productInformation.appendChild(productPrice);
                                productInformation.appendChild(productPath);

// Contenu des balises //

                                productName.textContent = camera.name;
                                productPrice.textContent = camera.price / 100 + " €";
                                productPath.textContent = "Voir l'article";

                        }
                } else {
                        console.error('Retour du serveur : ', response.status);
                        alert('Erreur rencontrée : ' + response.status);
                } 
        } catch (error) {
                    alert("Erreur : " + error);
        }
}

getAllCameras();