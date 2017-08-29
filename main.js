let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let header = document.querySelector(".header");
let bio = document.createElement("div");
let storyValue = document.createElement("div");

function reqListener () {
  let data = JSON.parse(this.responseText);
    let name = (data.name);
    let hub = (data.url);
    let email = (data.email);
    let company = (data.company);
    let picture = (data.avatar_url);
    bio.innerHTML = `
    <li>Name: ${data.name}</li>
    <li>Website: ${data.url}</li>
    <li>Email: ${data.email}</li>
    <li>Company: ${data.company}</li>
    `;
    storyValue.innerHTML = `<div>${data.bio}</div><img src="${picture}">`;
    header.append(name);
    basics.appendChild(bio);
    story.appendChild(storyValue);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jakedub");
req.addEventListener("load",reqListener);
req.send();
