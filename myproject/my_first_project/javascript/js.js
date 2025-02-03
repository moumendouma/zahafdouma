function hide(){
    let navbarside=document.getElementById("navbarside");
    let close=document.getElementById("close");
    if(close.style.transform==="rotate(0deg)"){
        navbarside.style.transform="translateX(0%)"
        close.style.transform="rotate(90deg)"
    
    }
    else {
        navbarside.style.transform="translateX(100%)"
                close.style.transform="rotate(0deg)"
    }
}