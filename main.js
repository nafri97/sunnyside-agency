const NAVBAR= document.getElementById('nav')
function closeNav(){
    NAVBAR.style.display= "none"
}
let count=0
function Hamburger(){
    
    if (count %2 == 0){
        count++ ;
        NAVBAR.style.display= "block";
    }else{
        count++;
        NAVBAR.style.display= "none";
    }
}