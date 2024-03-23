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