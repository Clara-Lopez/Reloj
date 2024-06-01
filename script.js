function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}
    
setInterval(function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time); // Comentado para evitar la salida repetida en la consola
    // your code here
    var secondsHand = document.getElementById('seconds');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');
    
    var secondsDeg = (time % 60) * 6; // 6 degrees per second
    var minutesDeg = ((time / 60) % 60) * 6; // 6 degrees per minute
    var hourDeg = ((time / 3600) % 12) * 30; // 30 degrees per hour
    
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
