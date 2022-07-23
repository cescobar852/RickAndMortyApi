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
        showButton(true);
    }

    // cuanto termine el ejercicio reset a 2000
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

    pintarPaginacion(data.info);

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

//Pintar botones despues de loading
const showButton = estado => {
    const sectionButton = document.getElementById("section-button");

    if (estado) {
        sectionButton.classList.remove('d-none');
        // console.log(sectionButton);
    } else {
        sectionButton.classList.add('d-none');
    }

}


// pintar paginacion
const pintarPaginacion = (data) => {
    console.log(data);

    // disabled prev button

    const paginacion = document.getElementById('paginacion');

}
