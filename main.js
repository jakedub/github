//Element grabs
let header = document.querySelector("header");
let basic = document.getElementsByClassName(".basic");
let story = document.getElementsByTagName("ul");
let block = document.getElementsByTagName("blockquote");
let data = "";
let name = "";
let hub = "";
let email = "";
let company = "";
let website = "";
let image= "";
let bio = "";

//Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jakedub");
req.addEventListener("load", reqListener);
req.send();
console.log(req);

function reqListener(userData){
  let userData = JSON.parse(this.responseText);
  console.log(userData);
  name = userData.name;
  userName = userData.login;
  hub = userData.url;
  email = userData.email;
  company = userData.company;
  website = userData.website;
  image = userData.url;
  bio = userData.bio;
}

  let li1=document.createElement("li");
  let li2=document.createElement("li");
  let li3=document.createElement("li");
  let li4=document.createElement("li");
  let li5=document.createElement("li");
  let p1=document.createElement("p");
  li1.textContent = name; //assigning text from the variable to the list item
  li2.textContent = hub;
  li3.textContent = email;
  li4.textContent = company;
  li5.textContent = website;
  p1.textContent =bio;
  basic.appendChild(li1); //appending the list item
  basic.appendChild(li2);
  basic.appendChild(li3);
  basic.appendChild(li4);
  basic.appendChild(li5);
  block.appendChild(p1);


//
// function biography(){
//   story.appendChild()//assuming a callback from reqListener here
// }
//Something about a callback

//Pull the API

//Build out html

//Assign the design work
