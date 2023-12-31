import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_ARF9TnDvEhxr8vH5wRuD1ZbXaqH3gtdup6XSlzW9w1vbnuD8y3k9gIeotMM8D4Bf";

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds').then(({data}) => {
        return data;
    })
    .catch((err) =>
    {
        console.log(err);
    });
};


function fetchCatByBreed(breedId){
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(({data}) => {
        const catData = data[0]
        return catData;
    })
    .catch((err) =>
    {
        console.log(err);
    });
};


export {fetchBreeds, fetchCatByBreed};
