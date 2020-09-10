
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
console.log("Details of objects");
function printObjects(){
    for(let i=0;i<Info.length;i++){
        console.log(Info[i]);
    }
}

printObjects();