// console.log("funciona")




// pintar el loading
const loadingData = estado => {
    const loading = document.getElementById("loading");
    
    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none');
    }
}


loadingData(true);