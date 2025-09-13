let i = 0;

// header

const navHomeHead = document.getElementById('navHomeHead');
const navMenuHead = document.getElementById('navMenuHead');
const navAboutHead = document.getElementById('navAboutHead');
const navContactHead = document.getElementById('navContactHead');

const homeSection = document.getElementById('navHome');
const menuSection = document.getElementById('navMenu');
const aboutSection = document.getElementById('navAbout');
const contactSection = document.getElementById('navContact');


if (homeSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navHomeHead.classList.add("active")
                navMenuHead.classList.remove("active")
                navAboutHead.classList.remove("active")
                navContactHead.classList.remove("active")
            }
        });
    }, {
        root: null,           
        rootMargin: '0px',   
        threshold: 0.1       
    });

    observer.observe(homeSection);
}


if (menuSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navHomeHead.classList.remove("active")
                navMenuHead.classList.add("active")
                navAboutHead.classList.remove("active")
                navContactHead.classList.remove("active")
            }
        });
    }, {
        root: null,           
        rootMargin: '0px',   
        threshold: 0.1       
    });

    observer.observe(menuSection);
}


if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navHomeHead.classList.remove("active")
                navMenuHead.classList.remove("active")
                navAboutHead.classList.add("active")
                navContactHead.classList.remove("active")
            }
        });
    }, {
        root: null,           
        rootMargin: '0px',    
        threshold: 0.1        
    });

    observer.observe(aboutSection);
}


if (contactSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navHomeHead.classList.remove("active")
                navMenuHead.classList.remove("active")
                navAboutHead.classList.remove("active")
                navContactHead.classList.add("active")
            }
        });
    }, {
        root: null,           
        rootMargin: '0px',    
        threshold: 0.1        
    });

    observer.observe(contactSection);
}

// menu | nav

const allItem = document.getElementById('allItem');
const teaItem = document.getElementById('teaItem');
const snacksItem = document.getElementById('snacksItem');
const burgersItem = document.getElementById('burgersItem');
const icecreamItem = document.getElementById('icecreamItem');
const dessertItem = document.getElementById('dessertItem');
const coffeeItem = document.getElementById('coffeeItem');
const saladItem = document.getElementById('saladItem');

const allItemMenu = document.getElementById('allItemMenu');
const teaItemMenu = document.getElementById('teaItemMenu');
const snacksItemMenu = document.getElementById('snacksItemMenu');
const burgersItemMenu = document.getElementById('burgersItemMenu');
const icecreamItemMenu = document.getElementById('icecreamItemMenu');
const dessertItemMenu = document.getElementById('dessertItemMenu');
const coffeeItemMenu = document.getElementById('coffeeItemMenu');
const saladItemMenu = document.getElementById('saladItemMenu');

function activeNavMenu(tag) {
    allItem.classList.remove("active");
    teaItem.classList.remove("active");
    snacksItem.classList.remove("active");
    burgersItem.classList.remove("active");
    icecreamItem.classList.remove("active");
    dessertItem.classList.remove("active");
    coffeeItem.classList.remove("active");
    saladItem.classList.remove("active");

    const item = document.getElementById(tag);
    item.classList.add("active");

    allItemMenu.classList.replace("blockShow", "block");
    teaItemMenu.classList.replace("blockShow", "block");
    snacksItemMenu.classList.replace("blockShow", "block");
    burgersItemMenu.classList.replace("blockShow", "block");
    icecreamItemMenu.classList.replace("blockShow", "block");
    dessertItemMenu.classList.replace("blockShow", "block");
    coffeeItemMenu.classList.replace("blockShow", "block");
    saladItemMenu.classList.replace("blockShow", "block");

    const fullItemMenu = tag + "Menu";
    const itemMenu = document.getElementById(fullItemMenu);

    itemMenu.classList.replace("block", "blockShow");
}

// menu | food

const overlayTwo = document.getElementById('overlayTwo');
const food = document.getElementById('food');
const nameFood = document.getElementById('nameFood');
const captionFood = document.getElementById('captionFood');
const priceFood = document.getElementById('priceFood');

function foodShow(line) {
    const [src, name, caption, price] = line.split(" @ ");

    overlayTwo.style.display = "block";
    food.src = src;
    nameFood.innerText = name;
    captionFood.innerText = caption;
    priceFood.innerText = price;
}

function foodUnShow() {
    overlayTwo.style.display = "none";
    food.src = "";
}

// about us | pictures

const overlayOne = document.getElementById('overlayOne');
const pic = document.getElementById('pic');

function pictureShow(url) {
    overlayOne.style.display = "block";
    pic.src = url;
}

function pictureUnShow() {
    overlayOne.style.display = "none";
    pic.src = "";
}

// about us | reviews

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

const blockOne = document.getElementById('blockOne');
const blockTwo = document.getElementById('blockTwo');

btnLeft.addEventListener('click', () => {
    if (i === 2) {
        sliderLeft();
        i = 0;
    }
});

btnRight.addEventListener('click', () => {
    if (i === 0) {
        sliderRight();
        i = 2;
    }
});

function sliderRight() {
    blockOne.style.opacity = "0";
    blockTwo.style.opacity = "1";
    btnLeft.classList.remove("lock");
    btnRight.classList.add("lock");
}

function sliderLeft() {
    blockOne.style.opacity = "1";
    blockTwo.style.opacity = "0";
    btnLeft.classList.add("lock");
    btnRight.classList.remove("lock");
}

// other

document.addEventListener('keydown', event => {  
    if (event.key === "Escape") {
        pictureUnShow();
        foodUnShow(); 
    }     
});