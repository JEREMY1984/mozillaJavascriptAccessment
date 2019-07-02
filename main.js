const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.dark');
const thumbBar = document.querySelector('.thumb-bar');

const images = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];


for (let i=0; i<images.length; i++){
  let newImg = document.createElement('img');
  newImg.setAttribute('src',images[i]);
  newImg.setAttribute('class','thumbnail-img');
  thumbBar.appendChild(newImg);
  
}

const thumbnailImg = document.querySelectorAll('.thumbnail-img');

for(let i=0; i<thumbnailImg.length; i++){
  thumbnailImg[i].addEventListener('click',function(){
    displayedImg.setAttribute('src',images[i])
  })
}

let overlayColor = 'rgba(232, 21, 21, 0.5)'

btn.onclick = function(){
  if (overlay.style.backgroundColor === overlayColor){
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  } else {
  overlay.style.backgroundColor = overlayColor;
  btn.textContent = 'Lighten';
  }
  
}
