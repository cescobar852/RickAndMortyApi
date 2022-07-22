// console.log("funciona")

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})

const fetchData = async (url = "https://rickandmortyapi.com/api/character") => {

try {
    
    loadingData(true)



    const res = await fetch(url);
    const data = await res.json();

    function timer () {
        // console.log(data);
        loadingData(false);
        pintarCard(data);
    }

    setTimeout(timer, 2000);



} catch (error) {
    console.log(error);
} 

}

//pintar la card de personajes

const pintarCard = (data) => {

    const cards = document.getElementById('card-dinamicas');
    cards.textContent = "";

    const templateCard = document.getElementById('template-card').content;

    const fragment = document.createDocumentFragment ();

    data.results.forEach(item => {

        const clone = templateCard.cloneNode(true);
        clone.getElementById("CharacterName").textContent = item.name;
        clone.getElementById("CharacterType").textContent = item.name;
        clone.getElementById("CharacterImg").setAttribute("src", item.image);

        //guardamos el fragment para evitar reflow
        fragment.appendChild(clone);
    });
    
    cards.appendChild(fragment);
}


// pintar el loading
const loadingData = estado => {
    const loading = document.getElementById("loading");
    
    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none');
    }
}
