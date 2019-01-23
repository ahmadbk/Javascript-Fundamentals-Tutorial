//var batwing = {
//    status: "Ready",
//    rescueBatman: function () {
//        document.write("locating his transponder ... initiating launch...");
//    }
//};

//    if(batwing.status === "Ready") {
//        batwing.rescueBatman();
//    }

//var utilities = {
//    printAllMembers: function (targetObject) {
//        for (i in targetObject) {
//            document.write("<br />" + targetObject[i]);
//        }
//    }
//};

//utilities.printAllMembers(batwing);

//var planet = {
//    id: 34,
//    name: "Imtempesta Nox",
//    faction: {
//        factionId: 2,
//        name: "Nex",
//        notification: function () {
//            document.write("Nex alliances....unite!");
//        }
//    },
//    cities: [
//        { locationId: 15, name: "Gladius" },
//        { locationId: 16, name: "Chalyba" },
//        { locationId: 17, name: "Ensis" }
//    ]
//};

//planet.faction.notification();

//document.write("<br />" + planet.name);
//planet.name = "Vultua";
//document.write("<br >" + planet.name);

//var z = planet;
//document.write("<br />" + z.name);

//if (typeof planet.defense === "undefined") {
//    planet.defense = "Ion Canon";
//}

//for (member in planet) {
//    document.write("<br />" + member + "===>" + planet[member]);
//}

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new car("Eagle", "Taylon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);