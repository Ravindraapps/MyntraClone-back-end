import {men,women,kids,home,beauty,studio,profile,navbar} from "/componant/navbar.js"


document.getElementById("header").innerHTML = navbar();

    

    const showMen = ()=> {
        document.getElementById("ddown").innerHTML = men();
    }
    document.getElementById("menCat").addEventListener("mouseover",showMen);

    const removeMen = () => {
        document.getElementById("ddown").innerHTML = null;
        document.getElementById("ddownP").innerHTML = null;
    }
    document.getElementById("ddown").addEventListener("mouseleave",removeMen);

    const showWomen = () => {
        document.getElementById("ddown").innerHTML = women();
    }
    document.getElementById("womenCat").addEventListener("mouseover",showWomen);

    const showKids = ()=> {
        document.getElementById("ddown").innerHTML = kids();
    }
    document.getElementById("kidCat").addEventListener("mouseover",showKids);

    const showHome = ()=> {
        document.getElementById("ddown").innerHTML = home();
    }
    document.getElementById("homeCat").addEventListener("mouseover",showHome);

    const showBeauty = ()=> {
        document.getElementById("ddown").innerHTML = beauty();
    }
    document.getElementById("beautyCat").addEventListener("mouseover",showBeauty);


    const showProfile = ()=> {
        document.getElementById("ddownP").innerHTML = profile();
    }
    document.getElementById("profileU").addEventListener("mouseover",showProfile);

    const showStudio = ()=> {
        document.getElementById("ddown").innerHTML = studio();
    }
    document.getElementById("Studio").addEventListener("mouseover",showStudio);

    const removeProf = () => {
        document.getElementById("ddownP").innerHTML = null;
        document.getElementById("ddown").innerHTML = null;
        document.getElementById("studioShow").innerHTML = null;
    }
    document.getElementById("ddownP").addEventListener("mouseleave",removeProf);

    const dispStudio = ()=> {
        document.getElementById("ddownP").innerHTML = null;
        document.getElementById("ddown").innerHTML = null;
        document.getElementById("studioShow").innerHTML = studio();
    }
    document.getElementById("Studio").addEventListener("mouseover",dispStudio);

    const removeStudio = () => {
        document.getElementById("studioShow").innerHTML = null;
    }
    document.getElementById("Studio").addEventListener("mouseleave",removeStudio);

    let goToSignup = ()=>{
        window.location.href = "verify.html";
    }
    document.getElementById("userProf").addEventListener("click",goToSignup);

    let goToCart = ()=>{
        window.location.href = "bag.html"
    }
    document.getElementById("cartBag").addEventListener("click",goToCart);

    let goToWishlist = ()=>{
        window.location.href = "wishlist.html"
    }

    document.getElementById("wishList").addEventListener("click",goToWishlist);

    
    let goToMenCategory = (req,res)=>{
        window.location.href = "menProduct.ejs"
        // $("menProduct").load("//menproducts")
    }

    document.getElementById("menCat").addEventListener("click",goToMenCategory);

    let goToWomenCategory = () =>{
        window.location.href = "womensProduct.html"
    }

    document.getElementById("womenCat").addEventListener("click",goToWomenCategory);

    

    let getResult = (e) => {
        if(e.key === "Enter"){
            var searchCat = document.getElementById("searchInp").value;
            if(searchCat === "men"){
            window.location.href = "mensProduct.html"
            }else if(searchCat === "women"){
                window.location.href = "womensProduct.html"
            }else{
                alert("Please enter valid category")
            };
        };
    }


    document.getElementById("searchInp").addEventListener("keypress",getResult);