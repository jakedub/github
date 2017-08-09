let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let header = document.querySelector(".header");
let contactInfo = document.createElement("div");
let storyInfo = document.createElement("div");

function reqListener () {
  let data = JSON.parse(this.responseText);
    let name = (data.name);
    let hub = (data.url);
    let email = (data.blog);
    let company = (data.company);
    let picture = (data.avatar_url);
    // let bio = (data.bio);
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    // let p1 = document.createElement("p");
    li1.textContent = name;
    li2.textContent = hub;
    li3.textContent = email;
    li4.textContent = company;
    // p1.textContent = p1;
    basics.appendChild(li1);
    basics.appendChild(li2);
    basics.appendChild(li3);
    basics.appendChild(li4);
    contactInfo.innerHTML = ``;
    storyInfo.innerHTML = `<p>${data.bio}</p><img src="${picture}">`;
    header.append(name);
    basics.appendChild(contactInfo);
    story.appendChild(storyInfo);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jakedub");
req.addEventListener("load",reqListener);
req.send();
