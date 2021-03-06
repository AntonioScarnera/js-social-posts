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

const container = document.getElementById("container");


function creaPost(){
    posts.forEach((post)=>{
    const postBox = document.createElement("div");
    postBox.setAttribute("class", "post");

    let data = new Date(post.created);
    console.log(data.toLocaleDateString());

    let iniziali = post.author.name;
    let nomeCognome = iniziali.split(" ");
    for (let i = 0; i < nomeCognome.length; i++) {
        nomeCognome[i] = nomeCognome[i][0].charAt(0);
        iniziali = nomeCognome[0]+ " " + nomeCognome[1];
    }
    console.log(iniziali)

    const postHeader = `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${iniziali}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${data.toLocaleDateString()}</div>
            </div>                    
        </div>
    </div>`;

    const postText = `
    <div class="post__text">
        ${post.content}
    </div>`;
    
    const postImage = `    
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>`;

    const postFooter = `
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div> `;


    postBox.innerHTML = postHeader + postText + postImage + postFooter;
    container.append(postBox);

    
    });


const button = document.querySelectorAll(".like-button");

const likes = document.querySelectorAll(".js-likes-counter")


button.forEach((element, index)=>{
    let flag = false;
    element.addEventListener("click", ()=>{
        if(flag){
            element.style.color="black";
            flag = false;    
            posts[index].likes--;
            likes[index].innerHTML=posts[index].likes;  
        }else{
            element.style.color="green";
            flag = true;
            posts[index].likes++;
            likes[index].innerHTML=posts[index].likes;

        }

        
    })
    
})


}





creaPost();