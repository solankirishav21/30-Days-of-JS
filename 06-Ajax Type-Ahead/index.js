// console.log("connected");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
// console.log(cities);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findMatches(input, cities){
    return cities.filter(place => {
        const regex  = new RegExp(input, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    }) 
}

function display() {
    const match = findMatches(this.value, cities);
    const html = match.map(place => {
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class= "hl"> ${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class= "hl"> ${this.value}</span>`);
        return `
        <li>
            <span class = "name"> ${cityName}, ${stateName} </span>
            <span class ="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestion.innerHTML = html;
}
const searchInput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");

searchInput.addEventListener("change", display);
searchInput.addEventListener("keyup", display);