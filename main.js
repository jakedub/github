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
  let name = `${data.name}`;
  let hub = `GitHub URL: ${data.url}`;
  let email = `Email: ${data.email}`;
  let company = `Company: ${data.company}`;
  let website = `Website: ${data.website}`;
  let image= `Image ${data.avatar_url}`;
  }
  // callBack(bio);
  console.log(reqListener);


// function demo(name, hub, email, company, website){
// }
//
// function biography(){
//   story.appendChild()//assuming a callback from reqListener here
// }
//Something about a callback

//Pull the API

//Build out html

//Assign the design work
