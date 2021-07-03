//SOME NECESSARY STUFFS TO DO
//SET THE HEADER'S MARGIN-TOP AS THE SAME VALUE OF THE HEIGHT OF NAVBAR

document.getElementById("header").style.marginTop = document.getElementById('navbar').clientHeight;


//NAVBAR
var navbar = document.getElementById('navbar');
var btns = navbar.getElementsByTagName('a');
for(var i=0; i<btns.length; i++)
{
    btns[i].addEventListener("click", function()
    {
        var current = navbar.getElementsByClassName('active');
        current[0].classList.remove('active');
        this.className += " active";
    });
}


//ADD SHADOWS UNDER THE NAVBAR WHEN THE USER SCROLLS DOWN
window.onscroll = function()
{
    let hheight = document.getElementById('header').clientHeight;

    if(document.body.scrollTop > hheight || document.documentElement.scrollTop > hheight)
        navbar.style.boxShadow = "0 0 30px rgba(0,0,0,0.3)";

    else
        navbar.style.boxShadow = "none";
}


// SLIDESHOW
var slide_idx = 0;
const backgrounds = 
    [
        "images/schoolinside.jpg",
        "images/shaheed_minar.jpg",
        "images/teagarden.jpg"
    ];

showSlides();
function showSlides()
{
    document.getElementById('slide').style.backgroundImage = "url('"+backgrounds[slide_idx]+"')";
    slide_idx++;
    if(slide_idx==backgrounds.length)
        slide_idx = 0;
    setTimeout(showSlides, 3000);
}
