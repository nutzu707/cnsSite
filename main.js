let ev_nat=0;
let bac=0;
let a5a=0;
let ecdl=0;
let cambridge=0;
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
}