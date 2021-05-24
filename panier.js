let storedCameras = JSON.parse(localStorage.getItem('newArticle'));

                let ListePanier = document.getElementById("ListePanier");

    // Structure HTML //

                let productLine = document.createElement("tr");
                let tdname = document.createElement("td");
                let tdlense = document.createElement("td");
                let tdquantity = document.createElement("td");
                let tdprice = document.createElement("td");

    // Attributs des balises //

                productLine.setAttribute("class", "lignetype")
                tdname.setAttribute("class", "tdname");
                tdlense.setAttribute("class", "tdlense");
                tdquantity.setAttribute("class", "tdquantity");
                tdprice.setAttribute("class", "tdprice");

    // Liens de parenté //

                ListePanier.appendChild(productLine);
                productLine.appendChild(tdname);
                productLine.appendChild(tdlense);
                productLine.appendChild(tdquantity);
                productLine.appendChild(tdprice);

    // Contenu des balises //

                tdname.textContent = storredCameras.camera.name;
                tdlense.textContent = camera.lenses;
                tdquantity.textContent =
                tdprice.textContent = camera.price / 100 + " €";

