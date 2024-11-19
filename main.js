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

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.footer');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    const handleScroll = () => {
        elements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


let management = false;
let elevi = false;
let profesori = false;
function mobileMenuSectionsDisplay(section) {
    if (section === 'management') {
        management = !management;
        let id = document.getElementById("mobile-dropdown-menu-management");

        if (management) {
            id.style.height = `${id.scrollHeight}px`;
        } else {
            id.style.height = `0`;
        }
        resetmobileMenuSectionsDisplay('management');
    }
    else if (section === 'elevi') {
        elevi = !elevi;
        let id = document.getElementById("mobile-dropdown-menu-elevi");

        if (elevi) {
            id.style.height = `${id.scrollHeight}px`;
        } else {
            id.style.height = `0`;
        }
        resetmobileMenuSectionsDisplay('elevi');
    }
    else if (section === 'profesori') {
        profesori = !profesori;
        let id = document.getElementById("mobile-dropdown-menu-profesori");

        if (profesori) {
            id.style.height = `${id.scrollHeight}px`;
        } else {
            id.style.height = `0`;
        }
        resetmobileMenuSectionsDisplay('profesori');
    }
}

function resetmobileMenuSectionsDisplay(section){
    if(section==='management'){

        let id = document.getElementById("mobile-dropdown-menu-elevi");

        if (elevi) {
            id.style.height = `0`;
            elevi = !elevi;
        }

        id = document.getElementById("mobile-dropdown-menu-profesori");

        if (profesori) {
            id.style.height = `0`;
            profesori = !profesori;
        }
    }
    else if(section==='elevi'){

        let id = document.getElementById("mobile-dropdown-menu-management");

        if (management) {
            id.style.height = `0`;
            management = !management;
        }

        id = document.getElementById("mobile-dropdown-menu-profesori");

        if (profesori) {
            id.style.height = `0`;
            profesori = !profesori;
        }
    }
    else if(section==='profesori'){

        let id = document.getElementById("mobile-dropdown-menu-management");

        if (management) {
            id.style.height = `0`;
            management = !management;
        }


        id = document.getElementById("mobile-dropdown-menu-elevi");

        if (elevi) {
            id.style.height = `0`;
            elevi = !elevi;
        }
    }
}


let isOnDisplay=0;

function mobilemenudisplay() {
    const phoneMenu = document.getElementById("phone-menu");
    const mobileLogo = document.getElementById("mobile-logo");
    const burgerIcon = document.getElementById("burger-icon");

    if (isOnDisplay) {

        phoneMenu.style.maxHeight = "0";
        phoneMenu.style.opacity = "0";


        setTimeout(() => {
            phoneMenu.style.display = "none";
        }, 300);

        mobileLogo.style.position = "absolute";
        burgerIcon.style.position = "absolute";

    } else {
        phoneMenu.style.display = "flex";
        phoneMenu.style.maxHeight = "0";
        phoneMenu.style.opacity = "0";

        setTimeout(() => {
            phoneMenu.style.maxHeight = "100vh";
            phoneMenu.style.opacity = "1";
        }, 10);

        mobileLogo.style.position = "fixed";
        burgerIcon.style.position = "fixed";
    }

    isOnDisplay = !isOnDisplay;
}
