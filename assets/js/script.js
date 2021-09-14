const boxes = document.querySelectorAll(".box");
const description = document.querySelector("#description");
let selectedElement;

const items = [
  {
    icon: "🍕",
    name: "Pizza",
    description:
      "Pizza feita com massa de trigo e recheio de calabresa com queijo",
  },
  {
    icon: "🍟",
    name: "Batatas Fritas",
    description:
      "Batatas cortadas em formato de palito, fritas em óleo muito quente, com uma pitada de sal",
  },
  {
    icon: "🍔",
    name: "Big Mac",
    description:
      "Dois hambúrgueres, alface, queijo, molho especial, cebola e picles num pão com gergelim",
  },
  {
    icon: "🍗",
    name: "Coxinha de Frango",
    description:
      "Coxinha de frango temperada com alho, pimenta do reino e sal, empanada e frita em óleo",
  },
  {
    icon: "🌭",
    name: "Hot Dog",
    description: "Pão, salsicha, maionese, ketchup e mostarda",
  },
  {
    icon: "🥞",
    name: "Panqueca",
    description:
      "Panqueca feita com massa de trigo e ovos, com cobertura de mel",
  },
];

boxes.forEach(function (box, key) {
  box.addEventListener("click", function () {
    if (selectedElement) {
      selectedElement.classList.remove("selected");
    }

    selectedElement = box;
    description.innerHTML = `<h2>${items[key].icon} ${items[key].name}</h2><p>${items[key].description}</p>`;
    box.classList.add("selected");
  });
});
