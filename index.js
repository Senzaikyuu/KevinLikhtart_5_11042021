const img = document.querySelector(".img")
const nom = document.querySelector(".nom")
const prix = document.querySelector(".prix")

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => img.src = data[0].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => nom.innerHTML = data[0].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => prix.innerHTML = data[0].price)

// ***************************************************************************//

const img2 = document.querySelector(".img2")
const nom2 = document.querySelector(".nom2")
const prix2 = document.querySelector(".prix2")

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => img2.src = data[1].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => nom2.innerHTML = data[1].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => prix2.innerHTML = data[1].price)

// ***************************************************************************//

const img3 = document.querySelector(".img3")
const nom3 = document.querySelector(".nom3")
const prix3 = document.querySelector(".prix3")

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => img3.src = data[2].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => nom3.innerHTML = data[2].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => prix3.innerHTML = data[2].price)

// ***************************************************************************//

const img4 = document.querySelector(".img4")
const nom4 = document.querySelector(".nom4")
const prix4 = document.querySelector(".prix4")

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => img4.src = data[3].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => nom4.innerHTML = data[3].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => prix4.innerHTML = data[3].price)

// ***************************************************************************//

const img5 = document.querySelector(".img5")
const nom5 = document.querySelector(".nom5")
const prix5 = document.querySelector(".prix5")

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => img5.src = data[4].imageUrl)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => nom5.innerHTML = data[4].name)

fetch("http://localhost:3000/api/cameras")

.then(res => res.json())
.then(data => prix5.innerHTML = data[4].price)

// ***************************************************************************//



