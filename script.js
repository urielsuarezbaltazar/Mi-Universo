let musicStarted=false;
let noClicked=false;

generateStars();

/* RESPUESTA */

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

/* MÚSICA */

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

/* ESCENAS */

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

/* ESTRELLAS */

function generateStars(){
  const starsContainer=document.querySelector(".stars");
  for(let i=0;i<70;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.top=Math.random()*100+"%";
    star.style.left=Math.random()*100+"%";
    star.style.animationDuration=(1+Math.random()*2)+"s";
    starsContainer.appendChild(star);
  }
}

/* ESTRELLA FUGAZ */

function launchStar(){

  const star=document.createElement("div");
  star.textContent="🌠";
  star.style.position="absolute";
  star.style.fontSize="40px";
  star.style.left="-10%";
  star.style.top="10%";
  star.style.transition="transform 2s cubic-bezier(.25,.8,.25,1)";

  document.body.appendChild(star);

  setTimeout(()=>{
    star.style.transform="translate(60vw,50vh)";
  },50);

  setTimeout(()=>{
    star.style.left="50%";
    star.style.top="50%";
    star.style.transform="translate(-50%,-50%) scale(1.2)";
  },2000);

  setTimeout(()=>{
    star.remove();
    impact();
  },2200);
}

/* IMPACTO */

function impact(){

  const heart=document.getElementById("impactHeart");

  heart.style.position="absolute";
  heart.style.top="50%";
  heart.style.left="50%";
  heart.style.transform="translate(-50%,-50%) scale(0)";
  heart.style.transition="all 0.6s ease";
  heart.style.opacity="1";

  setTimeout(()=>{
    heart.style.transform="translate(-50%,-50%) scale(1.4)";
  },100);

  document.getElementById("astronaut").style.opacity=1;
}

/* CORAZONES ESCENA 3 */

function createFloatingHearts(){
  const container=document.getElementById("floatingHearts");

  for(let i=0;i<15;i++){
    const heart=document.createElement("div");
    heart.textContent="💖";
    heart.style.position="absolute";
    heart.style.left=Math.random()*100+"%";
    heart.style.bottom="-50px";
    heart.style.fontSize="25px";
    heart.style.transition="transform 6s linear";
    container.appendChild(heart);

    setTimeout(()=>{
      heart.style.transform="translateY(-120vh)";
    },50);

    setTimeout(()=>{
      heart.remove();
    },6000);
  }
}
