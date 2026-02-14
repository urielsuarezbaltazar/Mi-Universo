let musicStarted=false;
let noClicked=false;

generateStars();
createGalaxy();

function answer(val){
  if(!val){
    if(!noClicked){
      document.getElementById("options").innerHTML=
      '<button class="btn yes" onclick="answer(true)">Sí</button>';
      noClicked=true;
    }
  }else{
    startMusic();
    changeScene(2);
    launchStar();
  }
}

function startMusic(){
  if(!musicStarted){
    const music=document.getElementById("bgMusic");
    music.volume=0;
    music.play().then(()=>{
      let fade=setInterval(()=>{
        if(music.volume<1){
          music.volume+=0.05;
        }else{
          clearInterval(fade);
        }
      },100);
    }).catch(()=>{});
    musicStarted=true;
  }
}

function changeScene(num){
  document.querySelectorAll(".scene").forEach(s=>s.classList.remove("active"));
  document.getElementById("scene"+num).classList.add("active");
}

function nextScene(){
  if(document.getElementById("scene2").classList.contains("active")){
    changeScene(3);
    createFloatingHearts();
  }else{
    changeScene(4);
  }
}

/* ===== FONDO ===== */

function generateStars(){
  const starsContainer=document.querySelector(".stars");
  for(let i=0;i<120;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.top=Math.random()*100+"%";
    star.style.left=Math.random()*100+"%";
    star.style.animationDuration=(1+Math.random()*3)+"s";
    starsContainer.appendChild(star);
  }
}

function createGalaxy(){
  const galaxy=document.createElement("div");
  galaxy.className="galaxy";
  document.body.appendChild(galaxy);
}

/* ===== ESTRELLA FUGAZ ===== */

function launchStar(){
  const star=document.createElement("div");
  star.className="shooting-star";
  star.textContent="🌠";

  const trail=document.createElement("div");
  trail.className="trail";

  star.style.left="100%";
  star.style.top="0%";

  document.body.appendChild(trail);
  document.body.appendChild(star);

  star.animate([
    {transform:"translate(0,0)"},
    {transform:"translate(-50vw,50vh)"}
  ],{duration:2000,easing:"ease-in"});

  trail.animate([
    {transform:"translate(100vw,0) rotate(45deg)"},
    {transform:"translate(50vw,50vh) rotate(45deg)"}
  ],{duration:2000,easing:"ease-in"});

  setTimeout(()=>{
    impact();
  },2000);
}

function impact(){
  const heart=document.getElementById("impactHeart");
  heart.classList.add("show");
  heart.style.position="absolute";
  heart.style.top="50%";
  heart.style.left="50%";
  heart.style.transform="translate(-50%,-50%) scale(1.2)";

  document.getElementById("astronaut").style.opacity=1;
}

/* ===== CORAZONES ===== */

function createFloatingHearts(){
  const container=document.getElementById("floatingHearts");
  for(let i=0;i<25;i++){
    const heart=document.createElement("div");
    heart.textContent="💖";
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=(4+Math.random()*4)+"s";
    container.appendChild(heart);
  }
}
