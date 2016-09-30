var lineup = [{
  ownerName: "Aaron",
  carYear: "1997",
  carName: "Acura Integra Type-R",
  kiloWatts: "",
  horsePower: "200",
  weight: "2480",
  imgUrl: "images/2001-acura-integra-type-r.jpg"
}, {
  ownerName: "Aaron",
  carYear: "2006",
  carName: "Toyota Corolla XRS",
  kiloWatts: "",
  horsePower: "164",
  weight: "2670",
  imgUrl: "images/2005-toyota-corolla-xrs.jpg"
}, {
  ownerName: "Alphonso",
  carYear: "2012",
  carName: "Honda Fit",
  kiloWatts: "",
  horsePower: "117",
  weight: "2496",
  imgUrl: "images/2012-honda-fit.jpg"
}, {
  ownerName: "Jason Hernandez",
  carYear: "2014",
  carName: "Volkswagen Jetta Hybrid Turbo",
  kiloWatts: "",
  horsePower: "170",
  weight: "3312",
  imgUrl: "images/2014-volkswagen-jetta-hybrid.jpg"
}, {
  ownerName: "Luis",
  carYear: "2011",
  carName: "Nissan Murano",
  kiloWatts: "",
  horsePower: "260",
  weight: "3877",
  imgUrl: "images/2011-nissan-murano.jpg"
}, {
  ownerName: "Marie",
  carYear: "2008",
  carName: "Honda Civic LX",
  kiloWatts: "",
  horsePower: "140",
  weight: "2586",
  imgUrl: "images/2008-honda-civic-lx.jpg"
}, {
  ownerName: "Schwindle",
  carYear: "2010",
  carName: "Scion TC",
  kiloWatts: "",
  horsePower: "161",
  weight: "2905",
  imgUrl: "images/2010-scion-tc.jpg"
}, {
  ownerName: "Sophia",
  carYear: "2005",
  carName: "Toyota Camry LE",
  kiloWatts: "",
  horsePower: "160",
  weight: "3108",
  imgUrl: "images/2005-toyota-camry.jpg"
}, {
  ownerName: "Tona",
  carYear: "2013",
  carName: "Toyota Prius",
  kiloWatts: "",
  horsePower: "134",
  weight: "3042",
  imgUrl: "images/2014-toyota-prius-four.jpg"
}, {
  ownerName: "Trevor",
  carYear: "2014",
  carName: "Hyundai Veloster Turbo",
  kiloWatts: "",
  horsePower: "201",
  weight: "2888",
  imgUrl: "images/2014-hyundai-veloster.jpg"
}, {
  ownerName: "Tyler",
  carYear: "2014",
  carName: "Honda Civic NGV",
  kiloWatts: "",
  horsePower: "110",
  weight: "2933",
  imgUrl: "images/2014-honda-civic-ngv.jpg"
}, {
  ownerName: "Vicky",
  carYear: "2003",
  carName: "Mazda Protoge5",
  kiloWatts: "",
  horsePower: "130",
  weight: "2716",
  imgUrl: "images/2003-mazda3-protoge5.jpg"
}, {
  ownerName: "Viktor Vaughn",
  carYear: "2009",
  carName: "Kia Rio",
  kiloWatts: "",
  horsePower: "110",
  weight: "2365",
  imgUrl: "images/2009-kia-rio-lx.jpg"
}, {
  ownerName: "Thomas Stevens",
  carYear: "1886",
  carName: "Penny Farthing",
  kiloWatts: "",
  horsePower: "1",
  weight: "36",
  imgUrl: "images/1886-penny-farthing.jpg"
}, {
  ownerName: "Nissan Motorsports",
  carYear: "2009",
  carName: "Nissan GT-R",
  kiloWatts: "",
  horsePower: "480",
  weight: "3836",
  imgUrl: "images/2009-nissan-gt-r.jpg"
}, {
  ownerName: "Bernie Saito",
  carYear: "2005",
  carName: "Porsche 911 Turbo",
  kiloWatts: "",
  horsePower: "444",
  weight: "3660",
  imgUrl: "images/2005-porsche-911-turbo.jpg"
}];

var race = document.getElementById("test-results");

var min = 0.015;
var max = 0;
var maxCar = {};

function powerLevel(carListing) {
  var powerToWeight = (carListing.horsePower / carListing.weight);
  if (powerToWeight > max) {
    max = powerToWeight;
    maxCar = carListing;
  }
  var figureVar = document.createElement("figure");
  figureVar.classList = "car";
  figureVar.id = "car-" + i;
  figureVar.dataset.powerToWeight = powerToWeight;

  var imgVar = document.createElement("img");
  imgVar.src = carListing.imgUrl;
  imgVar.alt = carListing.carYear.carName;
  figureVar.appendChild(imgVar);

  var figcapVar = document.createElement("figcaption");
  figcapVar.innerHTML = (carListing.carYear + " " + carListing.carName + "\n" + carListing.horsePower + "hp / " + carListing.weight + "lbs = " + powerToWeight.toFixed(3) + " power-to-weight ratio.");
  figureVar.appendChild(figcapVar);
  race.appendChild(figureVar);
 }

 lineup.sort(function() { return 0.5 - Math.random(); });

 var spaceForCars = window.innerHeight - 80;
 var carHeight = document.body.offsetWidth * 0.064;
 var numOfCars = Math.floor(spaceForCars / carHeight);

for (var i = 0; i < numOfCars; i++) {
  powerLevel(lineup[i]);
}

function run() {
for (var i = 0; i < numOfCars; i++) {
  var vehicleVar = document.getElementById("car-" + i);
  var ptw = vehicleVar.dataset.powerToWeight;
  var movement = ((ptw - min) / (max - min) * 100) - 10;
  vehicleVar.classList += " racing";
  vehicleVar.style.marginLeft = movement + "%";
 }
 setTimeout(function(){ alert("Congratulations " + maxCar.carYear + " " + maxCar.carName + " YOU WIN!");  }, 15000);
}

function reset() {
  for (var i = 0; i < numOfCars; i++) {
    var vehicleVar = document.getElementById("car-" + i);
    vehicleVar.classList = "car";
    vehicleVar.style.marginLeft = 0;
  }
}
