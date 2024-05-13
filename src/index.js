import './calculadora';
import './style.css';










/* const mtime = document.getElementById("time");
const itime = document.getElementById("timeI");
const calcTime = document.getElementById("calcTime");
const header = document.querySelector("h1");

calcTime.addEventListener("click", () => {
    let cTime = mtime.value
    let iTime = itime.value;
    let result = getTime(cTime, iTime)
    header.textContent = `${result}`;
});

function getTime(time, stime) {
    let hour = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3, 5));
    let sHour = parseInt(stime.slice(0, 2));
    let sMinutes = parseInt(stime.slice(3,5));

    let cHour = hour + sHour;
    let cMinutes = minutes + sMinutes;

    if (cMinutes < 60) {
        return `Teu intervalo acaba ${cHour}` + ":" + `${cMinutes}`
    }
    else if (cMinutes >= 60) {
        let sobra = cMinutes % 60;
        let minutes = Math.floor(cMinutes / 60);
        cHour = cHour + minutes;
        cMinutes = sobra;
        if (cMinutes < 10) {
            return `Teu intervalo acaba ${cHour}` + ":" + `0${cMinutes}`
        }
        else if (cMinutes >= 10) {
            return `Teu intervalo acaba ${cHour}` + ":" + `${cMinutes}`
        }
    }
    
}
 */