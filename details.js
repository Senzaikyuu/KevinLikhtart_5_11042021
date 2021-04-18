const imgcloseup = document.querySelector(".imgcloseup")
const producttitle = document.querySelector(".producttitle")
const description = document.querySelector(".description")
const productprice = document.querySelector(".productprice")


var article = document.querySelector("article")
article.addEventListener("onclick", productone)

var productone = function() {

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => imgcloseup.src = data[0].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => producttitle.innerHTML = data[0].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => description.innerHTML = data[0].description)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => productprice.innerHTML = data[0].price)

}

// ***************************************************************************//

