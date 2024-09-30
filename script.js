// Pegar img al final del primer section
let contenedorImg1 = document.querySelector("section:first-child");

contenedorImg1.innerHTML += `<img src="banner/1.jpg" alt="Puesta de sol sobre el mar">`;

// Pegar imgs en el primer div de cada article
let contenedorImg2 = document.querySelector("section article div:first-child");
let contenedorImg3 = document.querySelector("section article:nth-child(2) div");
let contenedorImg4 = document.querySelector("section article:last-child div");

contenedorImg2.innerHTML += `<img src="viajes/viajes-1.jpg" alt="Playa">`;
contenedorImg3.innerHTML += `<img src="viajes/viajes-2.jpg" alt="Paraíso">`;
contenedorImg4.innerHTML += `<img src="viajes/viajes-3.jpg" alt="Señales">`;

// Crear selector al final del último section
let contenedorSelector = document.querySelector("main section:last-child");

contenedorSelector.innerHTML += 
`
<select name="select">
  <option value="Sevilla" selected>Sevilla</option>
  <option value="Madrid">Madrid</option>
  <option value="Valencia">Valencia</option>
  <option value="Alicante">Alicante</option>
  <option value="Zaragoza">Zaragoza</option>
  <option value="Malaga">Malaga</option>
</select>
`;