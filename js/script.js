" use strict ";

var entries = [];

function PhoneBook(){
};

function listAllNames() {
    display.innerHTML = null;
    for (var i = 0;i < entries.length;i++){
        display.innerHTML += entries[i].name + "<br>";
    }
};

function listAllNumbers() {
    display.innerHTML = null;

    for (var i = 0;i < entries.length;i++){
        display.innerHTML += entries[i].number + "<br>";
    }
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
    entries.push({name:name.toUpperCase(), number:number});
    
};

function showRemove() {
    var remove = prompt("Enter name to remove");
    var search = remove.toUpperCase();
    for (var j = 0;j < entries.length;j++){
        if(entries[j].name === search){
        entries.splice(j,1);
        break;
        }
    }
};

function showLookup() {
    display.innerHTML = null;
    var lookupName = prompt("Enter name to lookup");
    for (var e = 0;e < entries.length;e++){
        if(entries[e].name == lookupName){
            display.innerHTML += entries[e].name + " " + entries[e].number;break;
        }
    }
};
function reverseLookup() {
    display.innerHTML = null;
    var lookup = prompt("Enter number to lookup");
    for (var o = 0;o < entries.length;o++){
        if(entries[o].number == lookup){
            display.innerHTML += entries[o].name + " " + entries[o].number;break;
        }
    }
};

function check (arrel){
    return arrel
}
var display = document.getElementById("display");
