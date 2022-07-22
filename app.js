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
        console.log(data)
        loadingData(false);
    }

    setTimeout(timer, 2000);



} catch (error) {
    
} finally {
    
}

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
