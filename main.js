//Element grabs
let header = document.querySelector("header");
let basic = document.getElementsByClassName("basic");
let story = document.getElementsByClassName("bio")

//Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jakedub");
req.addEventListener("load", reqListener);
req.send();
console.log(req);

function reqListener () {
  let data = JSON.parse(this.responseText);
  let name = `${data.name}`; //(data.name)
  let hub = `GitHub URL: ${data.url}`;
  let email = `Email: ${data.email}`;
  let company = `Company: ${data.company}`;
  let website = `Website: ${data.website}`;
  let image= `Image ${data.avatar_url}`;
  }
  // callBack(bio);
let li1=document.createElement("li");
let li2=document.createElement("li");
let li3=document.createElement("li");
let li4=document.createElement("li");
let li5=document.createElement("li");
li1.textContent = name; //do this for hub, email, company, website
li2.textContent = hub;
li3.textContent = email;
li4.textContent = company;
li5.textContent = website;
basics.appendChild(li1);
basics.appendChild(li2);
basics.appendChild(li3);
basics.appendChild(li4);
basics.appendChild(li5);


function demo(name, hub, email, company, website){
}
//
// function biography(){
//   story.appendChild()//assuming a callback from reqListener here
// }
//Something about a callback

//Pull the API

//Build out html

//Assign the design work
