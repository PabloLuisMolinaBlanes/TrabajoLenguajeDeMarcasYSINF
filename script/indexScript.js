function showMenu() {
    if (document.getElementById("phonewrapper").style.visibility == "visible") {
        document.getElementById("phonewrapper").style.visibility="hidden";
        document.getElementById("phonewrapper").style.position="absolute"; 
    } else {
        document.getElementById("phonewrapper").style.visibility="visible";
        document.getElementById("phonewrapper").style.position="initial";
    }
}