let slides = document.getElementsByClassName("slide");
slides[0].style.display="block";
let flag=0;
function change(num){
    flag = flag + num;
    if(flag==slides.length)
    {
        flag=0;
    }
    else if(flag<0)
    {
        flag=slides.length-1;
    }
    for(let i of slides)
    {
        i.style.display="none";
    }
    slides[flag].style.display="block";
}