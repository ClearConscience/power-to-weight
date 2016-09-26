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
  imgUrl: "images/rsz_2005-toyota-corolla-xrs.jpg"
}, {
  ownerName: "Alphonso",
  carYear: "2012",
  carName: "Honda Fit",
  kiloWatts: "",
  horsePower: "117",
  weight: "2496",
  imgUrl: "images/rsz_2012-honda-fit.jpg"
}, {
  ownerName: "Jason Hernandez",
  carYear: "2014",
  carName: "Volkswagen Jetta Hybrid Turbo",
  kiloWatts: "",
  horsePower: "170",
  weight: "3312",
  imgUrl: "images/rsz_2014-volkswagen-jetta-hybrid.jpg"
}, {
  ownerName: "Luis",
  carYear: "2011",
  carName: "Nissan Murano",
  kiloWatts: "",
  horsePower: "260",
  weight: "3877",
  imgUrl: "images/rsz_2011-nissan-murano.jpg"
}, {
  ownerName: "Marie",
  carYear: "2008",
  carName: "Honda Civic LX",
  kiloWatts: "",
  horsePower: "140",
  weight: "2586",
  imgUrl: "images/rsz_2008-honda-civic-lx.jpg"
}, {
  ownerName: "Schwindle",
  carYear: "2010",
  carName: "Scion TC",
  kiloWatts: "",
  horsePower: "161",
  weight: "2905",
  imgUrl: "images/rsz_2010-scion-tc.jpg"
}, {
  ownerName: "Sophia",
  carYear: "2005",
  carName: "Toyota Camry LE",
  kiloWatts: "",
  horsePower: "160",
  weight: "3108",
  imgUrl: "images/rsz-2005-toyota-camry.jpg"
}, {
  ownerName: "Tona",
  carYear: "2013",
  carName: "Toyota Prius",
  kiloWatts: "",
  horsePower: "134",
  weight: "3042",
  imgUrl: "images/rsz_2014-toyota-prius-four.jpg"
}, {
  ownerName: "Trevor",
  carYear: "2014",
  carName: "Hyundai Veloster Turbo",
  kiloWatts: "",
  horsePower: "201",
  weight: "2888",
  imgUrl: "images/rsz_2014-hyundai-veloster.jpg"
}, {
  ownerName: "Tyler",
  carYear: "2014",
  carName: "Honda Civic NGV",
  kiloWatts: "",
  horsePower: "110",
  weight: "2933",
  imgUrl: "images/honda.png"
}, {
  ownerName: "Vicky",
  carYear: "2003",
  carName: "Mazda Protoge5",
  kiloWatts: "",
  horsePower: "130",
  weight: "2716",
  imgUrl: "images/mazda.png"
}, {
  ownerName: "Viktor Vaughn",
  carYear: "2009",
  carName: "Kia Rio",
  kiloWatts: "",
  horsePower: "110",
  weight: "2365",
  imgUrl: "images/rsz_2009-kia-rio-lx.jpg"
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
  figureVar.style.transition = "10s ease-in";

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
