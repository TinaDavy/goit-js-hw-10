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

fetchCatByBreed('beng')








// 1. Створюю рефси
// 2. Робимо запит на сервер через ф-ю Фетчбрідс:
// 2.1. Використовуємо бібліотеку аксіос для гет запиту на сервер