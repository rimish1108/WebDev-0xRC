const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

function clock(){

    const now=new Date();

    const sec=now.getSeconds();

    const min=now.getMinutes();

    const hr=now.getHours()%12;

    const secDeg=sec*6;

    const minDeg=min*6+sec*0.1;

    const hrDeg=hr*30+min*0.5;

    second.style.transform=`rotate(${secDeg}deg)`;

    minute.style.transform=`rotate(${minDeg}deg)`;

    hour.style.transform=`rotate(${hrDeg}deg)`;

}

clock();

setInterval(clock,1000);