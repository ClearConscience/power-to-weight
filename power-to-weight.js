var lineup = [{
  ownerName: "Aaron",
  carYear: "1997",
  carName: "Acura Integra Type-R",
  kiloWatts: "",
  horsePower: "200",
  weight: "2480",
  imgUrl: "images/acura.png"
}, {
  ownerName: "Aaron",
  carYear: "2006",
  carName: "Toyota Corolla XRS",
  kiloWatts: "",
  horsePower: "164",
  weight: "2670",
  imgUrl: "images/toyota.png"
}, {
  ownerName: "Alphonso",
  carYear: "2012",
  carName: "Honda Fit",
  kiloWatts: "",
  horsePower: "117",
  weight: "2496",
  imgUrl: "images/honda.png"
}, {
  ownerName: "Jason Hernandez",
  carYear: "2014",
  carName: "Volkswagen Jetta Hybrid Turbo",
  kiloWatts: "",
  horsePower: "170",
  weight: "3312",
  imgUrl: "images/volkswagen.png"
}, {
  ownerName: "Luis",
  carYear: "2011",
  carName: "Nissan Murano",
  kiloWatts: "",
  horsePower: "260",
  weight: "3877",
  imgUrl: "images/nissan.png"
}, {
  ownerName: "Marie",
  carYear: "2008",
  carName: "Honda Civic LX",
  kiloWatts: "",
  horsePower: "140",
  weight: "2586",
  imgUrl: "images/honda.png"
}, {
  ownerName: "Schwindle",
  carYear: "2010",
  carName: "Scion TC",
  kiloWatts: "",
  horsePower: "161",
  weight: "2905",
  imgUrl: "images/scion.png"
}, {
  ownerName: "Sophia",
  carYear: "2005",
  carName: "Toyota Camry LE",
  kiloWatts: "",
  horsePower: "160",
  weight: "3108",
  imgUrl: "images/toyota.png"
}, {
  ownerName: "Tona",
  carYear: "2013",
  carName: "Toyota Prius",
  kiloWatts: "",
  horsePower: "134",
  weight: "3042",
  imgUrl: "images/toyota.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "",
  weight: "",
  imgUrl: "images/abarth.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "",
  weight: "",
  imgUrl: "images/abarth.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "",
  weight: "",
  imgUrl: "images/abarth.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "155",
  weight: "2865",
  imgUrl: "images/abarth.png"
}];

var race = document.getElementById("test-results");

var min = 0.015;
var max = 0;

function powerLevel(carListing) {
  var powerToWeight = (carListing.horsePower / carListing.weight);
  if (powerToWeight > max) {
    max = powerToWeight;
  }
  var figureVar = document.createElement("figure");
  figureVar.classList = "car";
  figureVar.id = "car-" + i;
  figureVar.dataset.powerToWeight = powerToWeight;
  figureVar.style.transition = "15s ease-in";

  var imgVar = document.createElement("img");
  imgVar.src = carListing.imgUrl;
  imgVar.alt = carListing.carYear.carName;
  figureVar.appendChild(imgVar);

  var figcapVar = document.createElement("figcaption");
  figcapVar.innerHTML = (carListing.horsePower + "hp / " + carListing.weight + "lbs = " + powerToWeight.toFixed(3) + " power-to-weight ratio.");
  figureVar.appendChild(figcapVar);
  race.appendChild(figureVar);
 }


for (var i = 0; i < lineup.length; i++) {
  powerLevel(lineup[i]);
}

function run() {
for (var i = 0; i < lineup.length; i++) {
  var vehicleVar = document.getElementById("car-" + i);
  var ptw = vehicleVar.dataset.powerToWeight;
  var movement = ((ptw - min) / (max - min) * 100) - 10;
  vehicleVar.style.marginLeft = movement + "%";
 }
}

function reset() {
  for (var i = 0; i < lineup.length; i++) {
    var vehicleVar = document.getElementById("car-" + i);
    vehicleVar.style.marginLeft = 0;
  }
}
