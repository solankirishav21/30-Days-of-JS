// console.log("hello");
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


const setDate = () => {
    
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegree = ((seconds /60) * 360) +90;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;

    const mins = date.getMinutes();
    const minsDegree = ((mins /60) * 360) +  ((seconds/60)*6) +90;
    minsHand.style.transform=`rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);

setDate();