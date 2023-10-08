const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products =[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"./images/air.avif"
            },
            {
                code: "darkblue",
                img: "./images/air.avif"
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        price:149,
        colors:[
            {
                code:"lightgray",
                img:"./images/jordan.png"
            },
            {
                code: "green",
                img: "./images/jordan.png"
            },
        ],
    },
    {
        id:3,
        title:"BLAZER",
        price:119,
        colors:[
            {
                code:"lighygray",
                img:"./images/blazer.png"
            },
            {
                code: "green",
                img: "./images/blazer.png"
            },
        ],
    },
    {
        id:4,
        title:"Carter",
        price:129,
        colors:[
            {
                code:"black",
                img:"./images/carter.webp"
            },
            {
                code: "lightgray",
                img: "./images/carter.webp"
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price:109,
        colors:[
            {
                code:"black",
                img:"./images/hippie.png.crdownload"
            },
            {
                code: "lightgray",
                img: "./images/hippie.png.crdownload"
            },
        ],
    },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the curent slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
        //change the current product
        choosenProduct = products[index];
  
        //change text of current product
  currentProductTitle.textContent= choosenProduct.title;
  currentProductPrice.textContent= "$" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;

  //assign new color
  currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor = choosenProduct.colors[index].code;
  })
    })
})

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
})
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});