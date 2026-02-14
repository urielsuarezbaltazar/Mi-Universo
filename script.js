let currentScene = 1;

const music = document.getElementById("bgMusic");

function answerNo(){
  document.querySelector(".no").style.display = "none";
}

function answerYes(){
  music.play();
  changeScene(2);
  startAnimation();
}

function changeScene(num){
  document.querySelector(".scene.active").classList.remove("active");
  document.getElementById("scene"+num).classList.add("active");
  currentScene = num;
}

function nextScene(){
  if(currentScene < 5){
    changeScene(currentScene + 1);
  }
}

/* Animación estrella + corazón */
function startAnimation(){
  const star = document.getElementById("shootingStar");
  const heart = document.getElementById("impactHeart");
  const astro = document.querySelector(".astronaut");

  star.classList.add("shoot");

  setTimeout(()=>{
    heart.classList.add("show");
  },1000);

  setTimeout(()=>{
    astro.style.display="flex";
  },1500);
}

/* Corazones flotando escena 3 */
setInterval(()=>{
  if(currentScene === 3){
    const heart = document.createElement("div");
    heart.className="floating-heart";
    heart.innerHTML="💙";
    heart.style.left=Math.random()*100+"vw";
    document.getElementById("floatingHearts").appendChild(heart);

    setTimeout(()=>{ heart.remove(); },5000);
  }
},500);
