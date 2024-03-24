window.addEventListener("scroll",()=> {
    const backgroundimg = document.getElementById('backgroundimg');
    const popWord = document.getElementById('popWord');
    const greyscreen = document.getElementById("greyscreen")
    
    const backIMGRect = backgroundimg.getBoundingClientRect();
    const backIMGbottom = backIMGRect.bottom;

    const windowHeight = window.innerHeight;
    
    if (backIMGbottom < windowHeight) {
      popWord.style.opacity = '1';
      popWord.style.left = '10%'; // Adjust the final position as needed
      greyscreen.style.left = "0";
      
    } else {
      popWord.style.opacity = '0';
      popWord.style.left = '-10%'; // Adjust the initial position as needed
      greyscreen.style.left = "-150%"
    }
  });

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let promotions = document.getElementsByClassName("promotions")

  if (n > promotions.length) {slideIndex = 1}
  if (n < 1) {slideIndex = promotions.length}

  for (i = 0; i < promotions.length; i++) {
  promotions[i].style.display = "none";
  }

  promotions[slideIndex-1].style.display = "flex";
}