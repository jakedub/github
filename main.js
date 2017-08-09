//Element grabs
let header = document.querySelector("header");
let basic = document.getElementsByClassName("basic");
let story = document.getElementsByTagName("blockquote");
let list = document.getElementsByClassName("list_class");

//Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jakedub");
req.addEventListener("load", reqListener);
req.send();

let data="";
let name="";
let hub="";
let email="";
let company="";
let website="";
let image="";
let bio="";

function reqListener () {
  data = JSON.parse(this.responseText);
  name = `Name: ${data.name}`;//(data.name)
  hub = `GitHub URL: ${data.url}`;
  email = `Email: ${data.email}`;
  company = `Company: ${data.company}`;
  website = `Website: ${data.website}`;
  image= `Image: ${data.avatar_url}`;
  bio = `Bio: ${data.bio}`;
  console.log(name);
  console.log(hub);
  console.log(email);
  console.log(company);
  console.log(website);
  console.log(image);
  console.log(bio);
  }

function something(){
   let li1=document.createElement("li");
   let li2=document.createElement("li");
   let li3=document.createElement("li");
   let li4=document.createElement("li");
   let li5=document.createElement("li");
   let p1=document.createElement("p");
   li1.innerHTML = name;
   li2.textContent = hub;
   li3.textContent = email;
   li4.textContent = company;
   li5.textContent = website;
   p1.textContent =bio;
   list.appendChild(li1);
   list.appendChild(li2);
   list.appendChild(li3);
   list.appendChild(li4);
   list.appendChild(li5);
   list.appendChild(p1);
 }
 something();
 reqListener();
