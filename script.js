/*
let url =  "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then(response => response.json())
.then(res => console.log(res))
*/

/*
fetch("./OpenJsonData.json")
.then((res) => res.json())
.then((data) => {
  console.log(data);
});
*/


function rngJob(){
    fetch("OpenJsonData.json")
    .then((res) => res.json())
    .then((data) => {
      let rand = Math.floor(Math.random() * data.length);
      console.log(data[rand]);
    
      document.getElementById("lustigemain").innerHTML = 
      '<h2 class="text-2xl">' + data[rand].Titel + ' '+ data[rand].Place + ', ' +data[rand].Province+'</h2>' + '<p>'+data[rand].Description +'</p>';
    })
}


document.getElementById("lustigerknopf").addEventListener("click", rngJob)
