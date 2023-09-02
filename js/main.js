const breakfasts = [
  [
    "Pancakes",
    "https://www.clara.es/medio/2022/05/11/desayunos-sin-pan_daff90d9_1280x853.jpg",
  ],
  [
    "Eggs and bacon",
    "https://media.istockphoto.com/id/533645537/es/foto/desayuno-con-huevos-tocino-panqueques-tostadas.jpg?s=612x612&w=0&k=20&c=FqiAf_OKQaZSOzguGCqja669ov1uzjSBHuY6Cr9fVU0=",
  ],
  [
    "Omelette",
    "https://images.ctfassets.net/86mn0qn5b7d0/featured-img-of-post-134105/f210a5f46bebfbc14d5e3f545b7a6c64/featured-img-of-post-134105.jpg?fm=jpg&fl=progressive&q=50&w=900&h=900&fit=fill",
  ],
  [
    "Croissant",
    "https://images.squarespace-cdn.com/content/v1/561718ebe4b062a227c4fcf2/1522900383651-KMNXKXX0R0B5BDLWK6ER/Peores+desayunos.jpg",
  ],
];
const lunches = [
  [
    "Pasta",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJJLK3cFVU-UgXGlaEsMJ9KwT_NHvMyB8g&usqp=CAU",
  ],
  [
    "Indian foods",
    "http://5.imimg.com/data5/SELLER/Default/2022/6/ZP/TZ/IK/144143379/lunch-food-services-500x500.jpg",
  ],
  [
    "Salad",
    "https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Chicken-Lunch-Bowl-with-Vegetables-and-Quinoa.jpg",
  ],
  [
    "Healthy tuper",
    "https://storables.com/wp-content/uploads/2023/08/how-to-keep-bento-lunch-box-cold-1691307125.jpeg",
  ],
];
const dinners = [
  [
    "Spaghetti",
    "https://img.delicious.com.au/Pwnp-j1O/w1200/del/2022/08/ramenara-ramen-carbonara-172843-2.png",
  ],
  [
    "Fish",
    "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505",
  ],
  [
    "Vegetables",
    "https://static01.nyt.com/images/2023/07/09/multimedia/08GIRL-DINNER-01-qkhm/08GIRL-DINNER-01-qkhm-superJumbo.jpg",
  ],
  [
    "Croquetas",
    "https://www.annarecetasfaciles.com/files/croquetas-puerro-huevo-1-1-scaled.jpg",
  ],
];
const shakes = [
  [
    "Strawberry Shake",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YWkPl9TR4aKpelTR-VZcFTr88pn1LBqLPg&usqp=CAU",
  ],
  [
    "Blueberry Shake",
    "https://www.inspiredtaste.net/wp-content/uploads/2021/07/Blueberry-Smoothie-Recipe-1200.jpg",
  ],
  [
    "Banana Shake",
    "https://mundometabolico.es/wp-content/uploads/2020/03/Bananashake.jpg",
  ],
  [
    "Chocolate Shake",
    "https://images-gmi-pmc.edge-generalmills.com/2a612714-ee3e-4198-89fd-3f80215c0ef6.jpg",
  ],
];

let breakfastItemsContainer = document.querySelector("#breakfast-items");
let lunchItemsContainer = document.querySelector("#lunch-items");
let dinnerItemsContainer = document.querySelector("#dinner-items");
let shakeItemsContainer = document.querySelector("#shake-items");

for (let i = 0; i < breakfasts.length; i++) {
  {
    let divFoodContainer = document.createElement("div");
    divFoodContainer.classList.add("food-item");

    let h2Title = document.createElement("h2");
    h2Title.classList.add("food-item-title");
    h2Title.innerHTML = breakfasts[i][0];

    let imgFoodItem = document.createElement("img");
    imgFoodItem.classList.add("food-item-img");
    imgFoodItem.src = breakfasts[i][1];

    divFoodContainer.appendChild(h2Title);
    divFoodContainer.appendChild(imgFoodItem);

    breakfastItemsContainer.appendChild(divFoodContainer);
  }
  {
    let divFoodContainer = document.createElement("div");
    divFoodContainer.classList.add("food-item");

    let h2Title = document.createElement("h2");
    h2Title.classList.add("food-item-title");
    h2Title.innerHTML = lunches[i][0];

    let imgFoodItem = document.createElement("img");
    imgFoodItem.classList.add("food-item-img");
    imgFoodItem.src = lunches[i][1];

    divFoodContainer.appendChild(h2Title);
    divFoodContainer.appendChild(imgFoodItem);

    lunchItemsContainer.appendChild(divFoodContainer);
  }
  {
    let divFoodContainer = document.createElement("div");
    divFoodContainer.classList.add("food-item");

    let h2Title = document.createElement("h2");
    h2Title.classList.add("food-item-title");
    h2Title.innerHTML = dinners[i][0];

    let imgFoodItem = document.createElement("img");
    imgFoodItem.classList.add("food-item-img");
    imgFoodItem.src = dinners[i][1];

    divFoodContainer.appendChild(h2Title);
    divFoodContainer.appendChild(imgFoodItem);

    dinnerItemsContainer.appendChild(divFoodContainer);
  }
  {
    let divFoodContainer = document.createElement("div");
    divFoodContainer.classList.add("food-item");

    let h2Title = document.createElement("h2");
    h2Title.classList.add("food-item-title");
    h2Title.innerHTML = shakes[i][0];

    let imgFoodItem = document.createElement("img");
    imgFoodItem.classList.add("food-item-img");
    imgFoodItem.src = shakes[i][1];

    divFoodContainer.appendChild(h2Title);
    divFoodContainer.appendChild(imgFoodItem);

    shakeItemsContainer.appendChild(divFoodContainer);
  }
}

let breakfastBtn = document.querySelector("#breakfast");
let lunchBtn = document.querySelector("#lunch");
let dinnerBtn = document.querySelector("#dinner");
let shakeBtn = document.querySelector("#shake");
let allBtn = document.querySelector("#all");

breakfastBtn.addEventListener("click", () => {
  breakfastItemsContainer.classList.remove("hidden");
  lunchItemsContainer.classList.add("hidden");
  dinnerItemsContainer.classList.add("hidden");
  shakeItemsContainer.classList.add("hidden");
});

lunchBtn.addEventListener("click", () => {
  lunchItemsContainer.classList.remove("hidden");
  breakfastItemsContainer.classList.add("hidden");
  dinnerItemsContainer.classList.add("hidden");
  shakeItemsContainer.classList.add("hidden");
});

dinnerBtn.addEventListener("click", () => {
  dinnerItemsContainer.classList.remove("hidden");
  lunchItemsContainer.classList.add("hidden");
  breakfastItemsContainer.classList.add("hidden");
  shakeItemsContainer.classList.add("hidden");
});

shakeBtn.addEventListener("click", () => {
  shakeItemsContainer.classList.remove("hidden");
  lunchItemsContainer.classList.add("hidden");
  dinnerItemsContainer.classList.add("hidden");
  breakfastItemsContainer.classList.add("hidden");
});

allBtn.addEventListener("click", () => {
  shakeItemsContainer.classList.remove("hidden");
  lunchItemsContainer.classList.remove("hidden");
  dinnerItemsContainer.classList.remove("hidden");
  breakfastItemsContainer.classList.remove("hidden");
});
