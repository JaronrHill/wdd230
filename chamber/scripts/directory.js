const requestURL = 'data/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject; 
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
  
    iconImg.setAttribute('src', business.image); 
    iconImg.setAttribute('alt', `Icon image for ${business.name}`);
    iconImg.setAttribute('loading', 'lazy');

    h2.textContent = business.name;
  
    p1.innerHTML = `${business.address}<br>Anthem, Arizona 85086<br>${business.phone}`; 

    p2.textContent = business.membershipLevel; 

    a.textContent = "Website";
    a.setAttribute('href', business.website);
  
    card.appendChild(iconImg);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
  
    document.querySelector('.directory-grid').appendChild(card);
}

const directory = document.querySelector('.directory-grid');
const dirpanelbutton = document.querySelector('#panel');
const dirlistbutton = document.querySelector('#list');

dirpanelbutton.addEventListener('click', () => {directory.classList.add('panelview')}, false);
dirlistbutton.addEventListener('click', () => {directory.classList.remove('panelview')}, false);