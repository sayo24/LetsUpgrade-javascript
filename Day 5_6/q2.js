window.onload = function () {
    let initialbuses = [

    ];
  
    if (localStorage.getItem("buses") == null) {
      localStorage.setItem("buses", JSON.stringify(initialbuses));
    }
  };

function display(arr = undefined){
    let total = "";
    let buses;
    if (arr == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));
    } else {
        buses = arr;
    }
    buses.forEach(function(bus,index){
        let row = `<tr>
               <td>${index+1}</td>
               <td>${bus.name}</td>
               <td>${bus.source}</td>
               <td>${bus.destination}</td>
               <td>${bus.number}</td>
               <td>${bus.capacity}</td>
               </tr>`;
        total += row;
    });
    document.getElementsByClassName("list")[0].innerHTML = total;
}
display();

function addbus(event) {
    event.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("num").value;
    let capacity = document.getElementById("capacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = number;
    bus.capacity = Number(capacity);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("num").value = "";
    document.getElementById("capacity").value = "";
}


function SearchSource() {
    let ssource = document.getElementById("Searchsource").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let res = buses.filter(function(bus){
        return(bus.source.toUpperCase().indexOf(ssource.toUpperCase()) != -1);
    });
    display(res);
}

function SearchDestination() {
    let sdest = document.getElementById("Searchdest").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let res = buses.filter(function(bus){
        return(bus.destination.toUpperCase().indexOf(sdest.toUpperCase()) != -1);
    });
    display(res);
}