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
      window.location.href = "previewPage.html";
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
  let filtered_data = [];

  if (roadster.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "Roadster") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (mast.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "Mast & Harbour") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (hm.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "H&M") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (clovia.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "Clovia") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (kalini.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "KALINI") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (dressberry.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "Dressberry") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (celfie.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "Celfie Design") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (hrx.checked == true) {
    data.forEach(function (data) {
      if (data.brand === "HRX") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (black.checked == true) {
    console.log("Hrx");
    data.forEach(function (data) {
      if (data.color === "black") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (navy.checked == true) {
    data.forEach(function (data) {
      if (data.color === "navyblue") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (green.checked == true) {
    data.forEach(function (data) {
      if (data.color === "green") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (white.checked == true) {
    data.forEach(function (data) {
      if (data.color === "white") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (pink.checked == true) {
    data.forEach(function (data) {
      if (data.color === "pink") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (blue.checked == true) {
    data.forEach(function (data) {
      if (data.color === "blue") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
  if (yellow.checked == true) {
    data.forEach(function (data) {
      if (data.color === "yellow") {
        filtered_data.push(data);
      }
    });
    displayProduct(filtered_data);
  }
};
document
  .getElementById("filter_sidebar")
  .addEventListener("click", function (event) {
    onData();
  });

let goToSignup = () => {
  window.location.href = "verify.html";
};
document.getElementById("userProf").addEventListener("click", goToSignup);

let goToCart = () => {
  window.location.href = "bag.html";
};
document.getElementById("cartBag").addEventListener("click", goToCart);

let goToWishlist = () => {
  window.location.href = "wishlist.html";
};

document.getElementById("wishList").addEventListener("click", goToWishlist);

let goToMenCategory = () => {
  window.location.href = "mensProduct.html";
};

document.getElementById("menCat").addEventListener("click", goToMenCategory);

let goToWomenCategory = () => {
  window.location.href = "womensProduct.html";
};

document
  .getElementById("womenCat")
  .addEventListener("click", goToWomenCategory);
let goToHome = () => {
  window.location.href = "landingpage.ejs";
};

document.getElementById("logo").addEventListener("click", goToHome);

let getResult = (e) => {
  if (e.key === "Enter") {
    var searchCat = document.getElementById("searchInp").value;
    if (searchCat === "men") {
      window.location.href = "mensProduct.html";
    } else if (searchCat === "women") {
      window.location.href = "womensProduct.html";
    } else {
      alert("Please enter valid category");
    }
  }
};

document.getElementById("searchInp").addEventListener("keypress", getResult);