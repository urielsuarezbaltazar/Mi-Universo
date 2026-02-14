let musicStarted = false;
let noClicked = false;

/* RESPUESTA INICIAL */

function answer(val){
  if(!val){
    if(!noClicked){
      document.getElementById("options").innerHTML =
      '<button class="btn yes" onclick="answer(true)">Sí</button>';
      noClicked = true;
    }
  } else {
    startMusic();
    changeScene(2);
    launchStar();
  }
}

/* MÚSICA */

function startMusic(){
  if(!musicStarted){
    const music = document.getElementById("bgMusic");
    music.volume = 0;

    music.play().then(()=>{
      let fade = setInterval(()=>{
        if(music.volume < 1){
          music.volume += 0.05;
        } else {
          clearInterval(fade);
        }
      },100);
    }).catch(()=>{});

    musicStarted = true;
  }
}

/* CAMBIO DE ESCENA */

function changeScene(num){
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById("scene"+num).classList.add("active");
}

/* CONTROL DE ESCENAS */

function nextScene(){
  if(document.getElementById("scene2").classList.contains("active")){
    changeScene(3);
    createFloatingHearts();
  }
  else if(document.getElementById("scene3").classList.contains("active")){
    changeScene(4);
  }
  else if(document.getElementById("scene4").classList.contains("active")){
    changeScene(5);
  }
}

/* ESTRELLA FUGAZ */

function launchStar(){

  const star = document.createElement("div");
  star.className = "shooting-star";

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = "-10px";

  document.body.appendChild(star);

  star.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(-400px,600px)" }
  ], {
    duration: 2000,
    easing: "ease-in"
  });

  setTimeout(()=>{
    star.remove();

    // Mostrar corazón azul
    const heart = document.getElementById("impactHeart");
    heart.classList.add("show");

    // Mostrar astronauta
    document.getElementById("astronaut").style.opacity = 1;

  },2000);
}

/* CORAZONES FLOTANDO ESCENA 3 */

function createFloatingHearts(){
  const container = document.getElementById("floatingHearts");

  for(let i=0;i<20;i++){
    const heart = document.createElement("div");
    heart.textContent = "💙";
    heart.style.left = Math.random()*100 + "%";
    heart.style.animationDuration = (4 + Math.random()*4) + "s";
    container.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },8000);
  }
}
