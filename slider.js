class Carrousel {
    constructor(images, htmlId) {
        this.images = images;
        this.htmlId = htmlId;
        this.carrouselImageContainer = document.getElementById(htmlId);
        this.indexActuel = 0;
        this.carouselImageElement = document.createElement('img');
        this.display();
        setInterval(() => this.suivant(), 10000);
    }


    display = () => {
        this.carrouselImageContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            let imgIndex = (this.indexActuel + i) % this.images.length;
            let imgElement = document.createElement('img');
            imgElement.src = this.images[imgIndex];
            this.carrouselImageContainer.appendChild(imgElement);
        }
    }


    animateText = () => {
        this.carouselImageElement.classList.remove('animate__animated', 'animate__bounceInUp');
        void this.carouselImageElement.offsetWidth;
        this.carouselImageElement.classList.add('animate__animated', 'animate__bounceInUp');
    }

    suivant = () => {
        this.indexActuel = (this.indexActuel + 3) % this.images.length;
        this.animateText();
        this.display();
    }

    precedent = () => {
        this.indexActuel = (this.indexActuel - 3 + this.images.length) % this.images.length;
        this.animateText();
        this.display();
    }
}

const imagesArray = ["img/images.png", "img/totinett.png", "img/trottinette-electrique-avec-siege-3000w.png", "img/trottinette_lectrique_ukaye_u5_350w_7_5ah_noir.png", "img/trottinette-electrique-dualtron-x-limited.png", "img/trottinette-electrique-voltaik-bleu.png", "img/mp-500323052_media.png"]
const carrousel1 = new Carrousel(imagesArray, "carouselContent")

const previousArrow = document.getElementById('arrowLeft');
const nextArrow = document.getElementById('arrowRight');

previousArrow.addEventListener('click', () => carrousel1.precedent())
nextArrow.addEventListener('click', () => carrousel1.suivant())

setTimeout(() => {
    carrousel1.suivant()
}, timeout);
