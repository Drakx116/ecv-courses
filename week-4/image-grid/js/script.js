const gallery = document.querySelector(".container");

function generateHtml(h,v){
  let snippet = `
  <div class="h${h} v${v}">
    <img src='img/img${getRandomNumber(12)}.jpg' alt=""/>
  </div>
  `;

  gallery.insertAdjacentHTML("beforeEnd", snippet);
}

function getRandomNumber(limit){
  return Math.floor(Math.random()*limit +1);
}

for (let i = 0; i< 100; i++){
  generateHtml(getRandomNumber(4),getRandomNumber(4))
}
for (let i = 0; i< 20; i++){
  generateHtml(1,1)
}
