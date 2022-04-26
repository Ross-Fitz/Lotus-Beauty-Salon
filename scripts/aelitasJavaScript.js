// Mobile menu
const aBurger = document.querySelector(".a_hamburger");
const aNav = document.querySelector (".a-nav");

aBurger.addEventListener("click", aNavMobile);


function aNavMobile() {

    aBurger.classList.toggle("active");
    aNav.classList.toggle("active");
}
// End for mobile menu


//Start Index page 

//logo onclick to bring back to index.html page 
function a_backHome(){
    window.location.href="index.html";
}

/* Our Services section Onclick img 
FOR NOW ITS JUST LINKED TO SERVICE PAGE. TARGETING ID ISNT WORKING FOR NOW */
function aHair () {
    window.location.href="services.html"
}
function aMakeup () {
    window.location.href="services.html"
}
function aMassage () {
    window.location.href="services.html"
}
function aNails () {
    window.location.href="services.html"
}



/* Star functionality */
function toggleStar(number) {
    starID = "a-star-"+number;
    var start;
    var end;
    if(number >=1 && number <= 5){
        start = 1;
        end = 5;
    }
    else if(number >=6 && number <= 10){
        start = 6;
        end = 10;
    }
    else{
        start = 11;
        end = 15;
    }

    for(i=start;i<=end;i++){
        starID = "a-star-"+i;
        document.getElementById(starID).className = "fa fa-star ";
    }

    if(document.getElementById(starID).className == "fa fa-star "){
        for(i=start;i<=number;i++){
            starID = "a-star-"+i;
            document.getElementById(starID).className = "fa fa-star checked";
        }
    }
}
/* End of star functionality */

/* Contact form  Start*/
function validateForm() {
    let name = document.forms["a-contact-form"]["a-fullname"].value;
    let email = document.forms["a-contact-form"]["a-email"].value;
    let number = document.forms["a-contact-form"]["a-ph"].value;
    
    //test name for two words
    if(name.indexOf(" ") != -1){
        name = name.split(" ");
        if(!name[1].length >= 1){
            alert("Name must contain two or more words(ie. Full Name)");
            return false;
        }
    }else{
        alert("Name must contain two or more words (ie. Full Name)");
        return false;
    }

    //test email for @, then test for period, then test for extension
    if(email.indexOf("@") != -1){
        email = email.split("@");
        if(email[1].indexOf(".") != -1){
            email = email[1].split(".");
            if(!email[1].length > 0){
                alert("Email must have an extension");
                return false;
            }
        }
        else{
            alert("Email must contain a period");
            return false;
        }
    }
    else{
        alert("Email must contain @ symbol");
        return false;
    }

    //test phone number is only numbers then test if between 10 & 12 digits long
    for( let i = 0; i < number.length; i++){
        if(isNaN(number.charAt(i)) && !(number.charAt(i) === " ") ){
            alert("Phone number must contain only digits, between 10 and 12 digits long");
            return false;
        }
    }
    if(number.length < 10 || number.length > 12){
        alert("Number should be between 10 & 12 digits long");
        return false;
    }

    //if all successful notify the user
    alert("Information has been validated");
    return true; 
  } /* Contact form End */


  
/*Start Footer - Aelita (21113131)*/
/* When arrow is pressed it srolls up to top of the page */
function scrollToTop() {
    window.scrollTo(0, 0);
}
/* End Footer */