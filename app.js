// items
const menu = [

    {
        id: 1,
        title: "sushi",
        category: "launch",
        price: 15.00,
        img : "./images/menu-item.jpg",
        desc: "sono un bellissimo piatto di sushi e non vedo l'ora che tu possa degustarmi come si deve. speriamo di vederci presto!",

    },
    {
        id: 2,
        title: "sushi",
        category: "launch",
        price: 15.00,
        img : "./images/menu-item.jpg",
        desc: "sono un bellissimo piatto di sushi e non vedo l'ora che tu possa degustarmi come si deve. speriamo di vederci presto!",

    },
    {
        id: 3,
        title: "sushi",
        category: "launch",
        price: 15.00,
        img : "./images/menu-item.jpg",
        desc: "sono un bellissimo piatto di sushi e non vedo l'ora che tu possa degustarmi come si deve. speriamo di vederci presto!",

    }
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){ 
    let displayMenu = menu.map(function(item){
        //console.log(item);

        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header><h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4></header>
            <p class="item-text">${item.desc}</p></div>
            </article>`;

   
    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
});