import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_ARF9TnDvEhxr8vH5wRuD1ZbXaqH3gtdup6XSlzW9w1vbnuD8y3k9gIeotMM8D4Bf";

import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const select = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");

fetchBreeds().then(data =>{
    const selectMarkup = data.map(cat => `<option value="${cat.id}">${cat.name}</option>`);
    return select.innerHTML = selectMarkup.join('');
}).catch((err) =>
{
    console.log(err);
});

select.addEventListener("change", handleSelect);
function handleSelect(event) {
    const breedId = event.target.value;

    fetchCatByBreed(breedId).then(catData =>{
        const {breeds, url} = catData;
        const {description, name, temperament
        } = breeds[0];
        const catMarkup = `<img class="cat-image" src="${url}" alt="${name}"><div class="cat-descr"><h1 class="cat-name">${name}</h1><p>${description}</p><p><span class="cat-features">Temperament:</span> ${temperament}</p></div>`;
        return catInfo.innerHTML = catMarkup;
    })
};

// fetchCatByBreed('beng').then(catData =>{
//     const {breeds, url} = catData;
//     const {description, name, temperament
//     } = breeds[0];
//     console.log(temperament);
//     console.log(url);
// })

