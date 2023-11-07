const container = document.querySelector(".container");
const coffees = [
  {
    name: "Etapa 1",
    text: "Una ingesta adecuada de vitamina A. ",
    image: "images/3.jpg"
  },
  {
    name: "Etapa 2",
    text: "Vitamina C. La vitamina C es esencial para producir colágeno",
    image: "images/2.jpg"
  },
  {
    name: "Etapa 3",
    text: "Zinc. La pérdida de cabello son asociadas con deficiencia de zinc. ",
    image: "images/1.jpeg"
  }

];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, text, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h4 class="card--title">${text}</h4>
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Saber Más</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
