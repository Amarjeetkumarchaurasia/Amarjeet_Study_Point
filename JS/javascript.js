    window.addEventListener("scroll",function(){
        var navBar = document.querySelector("nav");
        navBar.classList.toggle("stick",window.scrollY > 0);
    })
    window.addEventListener("scroll",function(){
        var navBar = document.querySelector("img");
        navBar.classList.toggle("stick",window.scrollY > 0);
    })
    alert("Click On My Website ok")