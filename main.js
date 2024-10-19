let ev_nat=0;
let bac=0;
let a5a=0;
let ecdl=0;
let cambridge=0;
let dsd=0;
let delf=0;
function examTextDisplay(n){
    if (n === 'ev-nat') {
        ev_nat = !ev_nat;
        if (ev_nat === true) {
            document.getElementById("ev-nat-sign").innerText="-";
            document.getElementById("ev-nat").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (ev_nat === false) {
            document.getElementById("ev-nat-sign").innerText="+";
            document.getElementById("ev-nat").style.display = "none";
        }
    }
    else  if (n === 'bac') {
        bac = !bac;
        if (bac === true) {
            document.getElementById("bac-sign").innerText="-";
            document.getElementById("bac").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (bac === false) {
            document.getElementById("bac-sign").innerText="+";
            document.getElementById("bac").style.display = "none";
        }
    }
    else  if (n === 'a5a') {
        a5a = !a5a;
        if (a5a === true) {
            document.getElementById("a5a-sign").innerText="-";
            document.getElementById("a5a").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (a5a === false) {
            document.getElementById("a5a-sign").innerText="+";
            document.getElementById("a5a").style.display = "none";
        }
    }
    else  if (n === 'ecdl') {
        ecdl = !ecdl;
        if (ecdl === true) {
            document.getElementById("ecdl-sign").innerText="-";
            document.getElementById("ecdl").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (ecdl === false) {
            document.getElementById("ecdl-sign").innerText="+";
            document.getElementById("ecdl").style.display = "none";
        }
    }
    else  if (n === 'cambridge') {
        cambridge = !cambridge;
        if (cambridge === true) {
            document.getElementById("cambridge-sign").innerText="-";
            document.getElementById("cambridge").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (cambridge === false) {
            document.getElementById("cambridge-sign").innerText="+";
            document.getElementById("cambridge").style.display = "none";
        }
    }
    else  if (n === 'dsd') {
        dsd = !dsd;
        if (dsd === true) {
            document.getElementById("dsd-sign").innerText="-";
            document.getElementById("dsd").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (dsd === false) {
            document.getElementById("dsd-sign").innerText="+";
            document.getElementById("dsd").style.display = "none";
        }
    }
    else  if (n === 'delf') {
        delf = !delf;
        if (delf === true) {
            document.getElementById("delf-sign").innerText="-";
            document.getElementById("delf").style.display = "block";
            examTextDisplayReset(n);
        }
        else if (delf === false) {
            document.getElementById("delf-sign").innerText="+";
            document.getElementById("delf").style.display = "none";
        }
    }
}

function examTextDisplayReset(n){
    if(n!=='ev-nat'){
        document.getElementById("ev-nat-sign").innerText="+";
        document.getElementById("ev-nat").style.display = "none";
        ev_nat=0;
    }
    if(n!=='bac'){
        document.getElementById("bac-sign").innerText="+";
        document.getElementById("bac").style.display = "none";
        bac=0;
    }
    if(n!=='a5a'){
        document.getElementById("a5a-sign").innerText="+";
        document.getElementById("a5a").style.display = "none";
        a5a=0;
    }
    if(n!=='ecdl'){
        document.getElementById("ecdl-sign").innerText="+";
        document.getElementById("ecdl").style.display = "none";
        ecdl=0;
    }
    if(n!=='cambridge'){
        document.getElementById("cambridge-sign").innerText="+";
        document.getElementById("cambridge").style.display = "none";
        cambridge=0;
    }
    if(n!=='dsd'){
        document.getElementById("dsd-sign").innerText="+";
        document.getElementById("dsd").style.display = "none";
        dsd=0;
    }
    if(n!=='delf'){
        document.getElementById("delf-sign").innerText="+";
        document.getElementById("delf").style.display = "none";
        delf=0;
    }
}






isOnDisplay=0;
function mobilemenudisplay(){
    isOnDisplay=!isOnDisplay;
    if(isOnDisplay){
        document.getElementById("phone-menu").style.display="flex";
        document.getElementById("mobile-logo").style.position="fixed";
        document.getElementById("burger-icon").style.position="fixed";
    }
    else{
        document.getElementById("phone-menu").style.display="none";
        document.getElementById("mobile-logo").style.position="absolute";
        document.getElementById("burger-icon").style.position="absolute";
    }
}