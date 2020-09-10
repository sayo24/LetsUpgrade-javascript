let Info=[
    {
        name:"jinny",
        age:30,
        country:"India",
        hobbies:["lipstick","mascara","liner"]
    },

    {
        name:"inny",
        age:15,
        country:"USA",
        hobbies:["lipstick","mascara","liner"]
    },

    {
        name:"piny",
        age:30,
        country:"America",
        hobbies:["lipstick","mascara","liner"]
    },

    {
        name:"chinny",
        age:10,
        country:"India",
        hobbies:["lipstick","mascara","liner"]
    }
];
console.log("Details of object having Age less than 30");
function displayAge(){
    for(let i=0;i<Info.length;i++){
        if(Info[i].age<30){
            console.log(Info[i]);
        }
    }
}

displayAge();

console.log("Details of objects where country is India");
function displayCountry(){
    for(let i=0;i<Info.length;i++){
        if(Info[i].country == "India"){
            console.log(Info[i]);
        }
    }
}

displayCountry();