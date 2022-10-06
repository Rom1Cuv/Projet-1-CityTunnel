const links = ["pages/bruxelles.html", "pages/tokyo.html", "pages/rome.html", "pages/seoul.html", "pages/seville.html"];
const cta = document.querySelector('#cta');

cta.addEventListener('click', e=>{
    e.preventDefault();
    let random = Math.floor(Math.random() * links.length);
    parent.location = links[random];
});

