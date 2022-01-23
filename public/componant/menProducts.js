let data;
async function mensProduct() {
  try {
    let x = await fetch("http://localhost:3780/mensproducts/mensproductapi");
    data = await x.json();
    console.log(data);
    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
}
mensProduct();

async function mensProduct_brand(brand) {
  try {
    let x = await fetch(
      `http://localhost:3780/mensproducts/mensproductapi/${brand}`
    );
    data = await x.json();
    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
}
async function mensProduct_color(color) {
  try {
    let x = await fetch(
      `http://localhost:3780/mensproducts/mensproductapi/${color}`
    );
    data = await x.json();
    console.log(data);
    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
}
async function mensProduct_sort(sort) {
  try {
    let x = await fetch(
      `http://localhost:3780/mensproducts/mensproductapi/${sort}`
    );
    data = await x.json();
    console.log(data);
    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
}

let products = document.getElementById("products");
let wishlist_data = JSON.parse(localStorage.getItem("wishlist_data")) || [];
let displayProduct = (data) => {
  products.innerHTML = "";
  let i = 0;
  let id;
  data.forEach((product) => {
    // console.log(product.rating)
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgDiv");
    let div = document.createElement("div");

    // localStorage for preview page---------------->

    div.addEventListener("mouseover", function () {
      div.style.padding = "10px";
      wishlist_div.style.visibility = "visible";
      wishlist_div.style.overflow = "visible";
      // id= setInterval(function(){
      //       if(i===imgArr.length){
      //           i=0;
      //       }
      //       Object.keys(product.images).forEach(function(key){
      //         imgArr.push(product.images[key])
      //       })
      //       console.log(imgArr)
      //       image.src=imgArr[i];
      //       imgDiv.append(image,ratingDiv)
      //       i++;
      //   },3000);
      // startSS();
    });
    div.addEventListener("mouseleave", function () {
      // clearInterval(id)
      div.style.padding = "20px";
      wishlist_div.style.visibility = "hidden";
      wishlist_div.style.overflow = "hidden";
      // clearInterval(id)
      imgArr = [];
      // stopSS();
    });
    let wish_btn = document.createElement("div");
    wish_btn.setAttribute("id", "wish_btn");

    let sizes = document.createElement("p");
    sizes.innerText = "Sizes : S,M,L,XL,XXL";
    // sizes.style.color = "gray";

    let wishlist_div = document.createElement("div");
    wishlist_div.setAttribute("id", "wishlist_div");
    let wish_name = document.createElement("p");
    wish_name.innerText = "Wishlist";

    let icon = document.createElement("i");
    icon.innerHTML = `<i class="far fa-heart"></i>`;

    wish_btn.append(icon, wish_name);
    wishlist_div.append(wish_btn, sizes);
    wish_btn.addEventListener("click", function (e) {
      icon.innerHTML = `<i class="fas fa-heart"></i>`;
      icon.style.color = "#ff425c";
      wish_btn.style.backgroundColor = "#32323a";
      wish_btn.style.color = "white";
      wishlist_data.push(product);
      localStorage.setItem("wishlist_data", JSON.stringify(wishlist_data));
    });

    let image = document.createElement("img");
    image.src = product.images.image1;
    image.addEventListener("click", function () {
      localStorage.setItem("preview_Data", JSON.stringify(product));
      window.location.href = "http://localhost:3780/mensproducts/previewpages";
    });

    let rating = document.createElement("p");
    rating.innerHTML = product.rating;

    let star_icon = document.createElement("i");
    star_icon.innerHTML = `<i class="fas fa-star"></i>`;
    star_icon.style.color = "teal";

    let count = document.createElement("p");
    count.innerText = `| ${product.count}`;

    let ratingDiv = document.createElement("div");
    ratingDiv.append(rating, star_icon, count);
    ratingDiv.setAttribute("id", "ratingDiv");
    let imgArr = [];

    imgDiv.append(image, ratingDiv);

    let brand = document.createElement("h3");
    brand.innerText = product.brand;

    let title = document.createElement("p");
    title.innerText = product.title;

    let price = document.createElement("h3");
    price.innerText = `Rs.${product.price}`;

    let off_price = document.createElement("p");
    off_price.innerText = `Rs.${product.off_price}`;
    off_price.style.textDecoration = "line-through";

    let discount = document.createElement("p");
    discount.innerText = `(${product.discount}% OFF)`;
    discount.style.color = "orange";

    let div1 = document.createElement("div");
    div1.setAttribute("id", "priceDiv");

    div1.append(price, off_price, discount);

    div.append(imgDiv, brand, title, wishlist_div, div1);

    products.append(div);
  });
};
var prsort = document.getElementById("sortByPrice");
let handlePriceSort = (e) => {
  console.log("here");
  let selected = prsort.value;
  if (selected == "low") {
    data = data.sort(function (a, b) {
      return a.price - b.price;
    });
    displayProduct(data);
  } else if (selected == "high") {
    data = data.sort(function (a, b) {
      return b.price - a.price;
    });
    displayProduct(data);
  } else if (selected == "disc") {
    data = data.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayProduct(data);
  }
};

prsort.onchange = function () {
  handlePriceSort();
};

let roadster = document.getElementById("roadster");
let mast = document.getElementById("mast");
let hrx = document.getElementById("hrx");
let hm = document.getElementById("hm");
let clovia = document.getElementById("clovia");
let kalini = document.getElementById("kalini");
let dressberry = document.getElementById("dressberry");
let celfie = document.getElementById("celfie");
let navy = document.getElementById("navy");
let green = document.getElementById("green");
let white = document.getElementById("white");
let black = document.getElementById("black");
let pink = document.getElementById("pink");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");

$(".checkk").click(function () {
  $(this).siblings("input:checkbox").prop("checked", false);
});
$(".checkk1").click(function () {
  $(this).siblings("input:checkbox").prop("checked", false);
});

let onData = () => {
  // let filtered_data = [];

  if (roadster.checked == true) {
    mensProduct_brand("Roadster");
  }
  if (mast.checked == true) {
    mensProduct_brand("Mast & Harbour");
  }
  if (hm.checked == true) {
    mensProduct_brand("H&M");
  }
  if (clovia.checked == true) {
    mensProduct_brand("Clovia");
  }
  if (kalini.checked == true) {
    mensProduct_brand("KALINI");
  }
  if (dressberry.checked == true) {
    mensProduct_brand("Dressberry");
  }
  if (celfie.checked == true) {
    mensProduct_brand("Celfie Design");
  }
  if (hrx.checked == true) {
    mensProduct_brand("HRX");
  }
  if (black.checked == true) {
    mensProduct_color("black");
  }
  if (navy.checked == true) {
    mensProduct_color("navy");
  }
  if (green.checked == true) {
    mensProduct_color("green");
  }
  if (white.checked == true) {
    mensProduct_color("white");
  }
  if (pink.checked == true) {
    mensProduct_color("pink");
  }
  if (blue.checked == true) {
    mensProduct_color("blue");
  }
  if (yellow.checked == true) {
    mensProduct_color("yellow");
  }
};

document
  .getElementById("filter_sidebar")
  .addEventListener("click", function (event) {
    onData();
  });

