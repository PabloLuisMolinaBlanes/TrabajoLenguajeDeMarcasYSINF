function showMenu() {
    if (document.getElementById("phonewrapper").style.visibility == "visible") {
        document.getElementById("phonewrapper").style.visibility="hidden";
        document.getElementById("phonewrapper").style.position="absolute"; 
    } else {
        document.getElementById("phonewrapper").style.visibility="visible";
        document.getElementById("phonewrapper").style.position="initial";
        document.getElementById("phonewrapper").style.border="1px solid black";
        document.getElementById("phonewrapper").style.backgroundColor="#F06209";
        document.getElementById("phonewrapper").style.fontStyle="bold";
    }
}
function hideMenu() {
    if ( window.innerWidth > 363 && document.getElementById("phonewrapper").style.visibility == "visible") {
        document.getElementById("phonewrapper").style.visibility="hidden";
        document.getElementById("phonewrapper").style.position="absolute";     
    }
}
