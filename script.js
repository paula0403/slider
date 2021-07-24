const images=[{img:"images/img1.jpg",text:"Zakhyntos"},{img:"images/img2.jpg",text:"Pier"},{img:"images/img3.jpg",text:"Maledives"}];
const img=document.querySelector("img.slider");
const txt=document.querySelector("h1.slider");
const dots=[...document.querySelectorAll('.dots span')];
let index=0;

const changeDot=()=>{
  const active=dots.findIndex(dot=>dot.classList.contains('active'));
  dots[active].classList.remove('active');
  dots[index].classList.add('active');
}

const changeSlide=()=>{
  index++;
  if(index===images.length){
    index=0;
  }
  img.src=images[index].img;
  txt.textContent=images[index].text;
  changeDot();
}

let idInterval=setInterval(changeSlide,2000);
const keyChange=(e)=>{
  if(e.keyCode==37||e.keyCode==39){
    clearInterval(idInterval);
  e.keyCode==39?index++:index--;
  if(index===images.length){
    index=0;
  }else if(index<0){
    index=images.length-1;
  }
  img.src=images[index].img;
  txt.textContent=images[index].text;
  changeDot();
  idInterval=setInterval(changeSlide,2000);
  }
}
window.addEventListener('keydown',keyChange);