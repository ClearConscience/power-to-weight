var lineup = [{
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "180",
  weight: "1860",
  imgUrl: "images/abarth.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "200",
  weight: "2000",
  imgUrl: "images/abarth.png"
}, {
  ownerName: "",
  carYear: "",
  carName: "",
  kiloWatts: "",
  horsePower: "350",
  weight: "3380",
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
}];

var race = document.getElementById("test-results");

function powerLevel(carListing) {
  var powerToWeight = (carListing.horsePower / carListing.weight);
  var figureVar = document.createElement("figure");
  figureVar.classList = "car";
  figureVar.id = "car-" + i;
  figureVar.dataset.powerToWeight = powerToWeight;
  figureVar.style.transition = "20s";

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

var min = 0.015;
var max = 0.083;

function run() {
for (var i = 0; i < lineup.length; i++) {
  var vehicleVar = document.getElementById("car-" + i);
  var ptw = carVar.dataset.powerToWeight;
  var movement = ((ptw - min) / (max - min) * 100) - 20;
  carVar.style.marginLeft = 0;
 }
}

function reset() {
  for (var i = 0; i < lineup.length; i++) {
    var carVar = document.getElementById("car-" + i);
    carVar.style.marginLeft = 0;
  }
}
