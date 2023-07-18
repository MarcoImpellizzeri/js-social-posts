"use strict"

// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, (numero progressivo da 1 a n)
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Milestone 2
//  - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// recupero l'elemento il cui andro ad inserire i div per i miei post
const postList = document.querySelector(".posts-list");

// un ciclo for per farl controllare i miei oggetti e farli stampare nel DOM
for (let i = 0; i < posts.length; i++) {
    const singlePost = posts[i];

    // creo il div padre con classe post
    const postDiv = document.createElement("div");

    postDiv.classList.add("post");

    console.log(postDiv);

    // condizione per la quale se l'immagine di profilo dovesse essere null viene 
    // inserito un elemento creato da me con l'iniziale del nome dell'utente
    if (singlePost.author.image === null || singlePost.author.image === "") {
        const initials = singlePost.author.name.charAt(0).toUpperCase();

        postDiv.innerHTML +=
        `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon profile-pick-not-found">
                    <span class="profile-initial profile-pick-not-found-text">${initials}</span>
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.author.name}</div>
                    <div class="post-meta__time">${singlePost.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.content}</div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.likes}</b> persone
                </div>
            </div> 
        </div>
        `
    } else {
        postDiv.innerHTML +=
        `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${singlePost.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.author.name}</div>
                    <div class="post-meta__time">${singlePost.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.content}</div>
        <div class="post__image">
            <img src="${singlePost.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.likes}</b> persone
                </div>
            </div> 
        </div>
        `;
    }

    // appendo il mio elemento creato alla postList
    postList.appendChild(postDiv);
};

// Milestone 3
//  - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
