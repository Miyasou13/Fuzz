const image=document.getElementById("ball");
let w=1,h=1;
let Xspeed=7;
let Yspeed=7;
let Rspeed=5;
let positionX=0;
let positionY=0;
let angle=0;

function animate(){
    positionX+=Xspeed;
    positionY+=Yspeed;
    angle+=Rspeed;
    image.style.left=positionX+"px";
    image.style.top=positionY+"px";
    image.style.rotate=angle+"deg";
    if(positionX+w+25>document.documentElement.clientWidth|| positionX<0){
        Xspeed*=-1;
    }
    if(positionY+h+8>document.documentElement.clientHeight || positionY<0){
        Yspeed*=-1;
    }
    requestAnimationFrame(animate);
}

window.addEventListener('load', () => {
        w=image.offsetWidth;
        h=image.offsetHeight;
        console.log(`w= ${w} , h=${h}`);
        animate();
});