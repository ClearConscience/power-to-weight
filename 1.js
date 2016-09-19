var alphaNames = ["AM General","Acura","Alfa Romeo","Aston Martin","Audi","BMW","Bentley","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Daewoo","Dodge","Eagle","FIAT","Ferrari","Fisker","Ford","GMC","Genesis","Geo","HUMMER","Honda","Hyundai","Infiniti","Isuzu","Jaguar","Jeep","Kia","Lamborghini","LandRover","Lexus","Lincoln","Lotus","MINI","Maserati","Maybach","Mazda","McLaren","Mercedes-Benz","Mercury","Mitsubishi","Nissan","Oldsmobile","Panoz","Plymouth","Pontiac","Porsche","Ram","Rolls-Royce","Saab","Saturn","Scion","Spyker","Smart","Subaru","Suzuki","Tesla","Toyota","Volkswagen","Volvo"];

var car = [
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Year": 2006,
    "Style": "XRS",
    "Engine": "2ZZ-GE",
    "Transmission": "C64",
    "Colors and Options": "Indigo Ink Pearl",
    "Gross Vehicle Weight": "2,670"
  }
];



  for (var i = 0; i < alphaNames.length; i++) {
    var a = document.createElement('button');
    a.innerText = alphaNames[i];
    a.setAttribute("href", "http://api.edmunds.com/api/vehicle/v2/" + alphaNames[i] + "?api_key=43ejma5sznyzdk8pjk79f5wk");
    document.getElementById('display').appendChild(a);
  }

function cars() {
  var b = document.createElement('div');
  document.getElementById('veh-info').appendChild(b);
  document.createElement('h2');
  var c = document.getElementsByTagName('h2').innerHTML(car.year + "  " + car.make + "  " + car.model + "  " + car.style);
  document.getElementById('id').appendChild(c);
}
