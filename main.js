const imagesGalery=document.querySelectorAll(".gallery a");
const popup=document.querySelector(".popup");
const sliderImg=document.querySelector(".slider img")

imagesGalery.forEach((imag)=>{
    imag.addEventListener("click",function(e){
        e.preventDefault();
        let bigImage=this.getAttribute("href");
        sliderImg.setAttribute("src",bigImage);
        popup.style.display="block";
        
    })
});


document.addEventListener("click",(e)=>{
    if (e.target.classlist.contains("inner")) {
        popup.style.display="none";
    }
});