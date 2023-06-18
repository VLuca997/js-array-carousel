// creo un Array con le 5 immagini per il carosello
// Inizializzo le variabili per : carosello, frecce up-down.
//gengero un ciclo for per il markup delle immagini all'intero del carosello.
//genero 2 event listner per ilclick dei pulsanti
//genero 2 funzioni per l'evento click dei pulsanti, per dargli la funzione active e per far si che il carosello, alla fine dell'array ricominci da indice 0.


//Array Carosello immagini
const imagesCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

//seleziono gli elementi html del carosello e dei bottoni
let carouselDiv = document.querySelector('.carousel');
let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');


// Ciclo for per generare il markup delle immagini nel carosello
for ( let i = 0; i < imagesCarousel.length; i++){
    let img = document.createElement('img'); // creo un elemento img
    img.classList('carousel-img'); //gli attribuiscoi la classe carousel-img

    if (i === 0){ // Se l'indice è 0
        img.classList.add('active'); // Aggiungiamo anche la classe active per rendere l'elemento visibile
    }
    img.src = imagesCarousel[i]; // dico all'elemento src che l'indice di questa immagine corrisponde all'elemento creato.
    carouselDiv.appendChild(img); // aggiungo questo elemento come figlio di carousel.img
}

// Creo gli event listner per i button
arrowUp.addEventListener('click', scrollUp);
arrowDown.addEventListener('click',scrollDown);

//funzione per il click dei button, in modo che quando si arriva alal fine dell'array si ricominci da capo.

//funzione per scrollUp