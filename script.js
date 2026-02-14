let musicStarted=false;
let noClicked=false;
let currentScene=1;

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
    currentScene=2;
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
  currentScene++;

  if(currentScene===4){
    createFloatingHearts();
  }

  changeScene(currentScene);
}

function launchStar(){
  const star=document.createElement("div");
  star.className="shooting-star";

  star.style.left=Math.random()*window.innerWidth+"px";
  star.style.top="-10px";

  document.body.appendChild(star);

  star.animate([
    {transform:"translate(0,0)"},
    {transform:"translate(-400px,600px)"}
  ],{duration:2000,easing:"ease-in"});

  setTimeout(()=>{
    document.getElementById("impactHeart").style.opacity=1;
    document.getElementById("astronaut").style.opacity=1;
  },2000);
}

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

function restartStory(){
  currentScene=1;
  changeScene(1);

  document.getElementById("floatingHearts").innerHTML="";
  document.getElementById("impactHeart").style.opacity=0;
  document.getElementById("astronaut").style.opacity=0;
}
