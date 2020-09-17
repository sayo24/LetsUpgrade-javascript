let EmpDet = [
	{
		name : "sayo",
		age : 25,
		city : "mumbai",
		salary : "25000 rs",
	},
	{
		name : "radh",
		age : 20,
		city : "Bilaspur",
		salary : "30000 rs",
	},
	{
		name : "Shreya",
		age : 39,
		city : "Pune",
		salary : "18000 rs",
	},
	{
		name : "ovi",
		age : 35,
		city : "Miami",
		salary : "40000 rs",
    },
    {
		name : "Sumit",
		age : 26,
		city : "Austrailia",
		salary : "35000 rs",
	}
];

function display(arr){
    let total = "";
    arr.forEach(function(detail,index){
        let row = `<tr>
               <td>${index+1}</td>
               <td>${detail.name}</td>
               <td>${detail.age}</td>
               <td>${detail.city}</td>
               <td>${detail.salary}</td>
               <td><button onclick="deleteRow(${index})">delete</button></td>
               </tr>`;
        total += row;
    });
    document.getElementsByClassName("list")[0].innerHTML = total;
}
display(EmpDet);


function SearchName() {
    let sname = document.getElementById("Searchname").value;
    let res = EmpDet.filter(function(EmpDet){
        return(EmpDet.name.toUpperCase().indexOf(sname.toUpperCase()) != -1);
    });
    display(res);
}

function SearchCity() {
    let scity = document.getElementById("Searchcity").value;
    let res = EmpDet.filter(function(EmpDet){
        return(EmpDet.city.toUpperCase().indexOf(scity.toUpperCase()) != -1);
    });
    display(res);
}

function deleteRow(index) {
    EmpDet.splice(index,1);
    display(EmpDet);
}