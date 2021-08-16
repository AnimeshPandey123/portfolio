var menuBar = document.querySelectorAll("menu-bar");

function openMenu(item){
    let enable = item.getAttribute("data-enabled");
    let menu  = document.getElementsByClassName("menu-items");
    let child = item.querySelectorAll('i');
    if(enable == "1"){
        let k = 0;
        for(let i = 0; i < menu.length; i++){
            k += 80;

            setTimeout(function(){ 
                menu[i].style.visibility = "hidden";}, k);
        }

        setTimeout(function(){ 
            child[0].className =  "fas fa-times fa-2x";}, 500);


    }else{

        for(let i = 0; i < menu.length; i++){
            menu[i].style.visibility = "visible";
        }


        setTimeout(function(){ 
            child[0].className =  "fas fa-bars fa-2x";}, 500);

    }

    let value = (enable == "1")?"0":"1";

    item.setAttribute("data-enabled", value);
} 