// console.log("connected");
const addMusic = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}" ]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}" ]`);

    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
window.addEventListener('keydown', addMusic);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removeTransition));