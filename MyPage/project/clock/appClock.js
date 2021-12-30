watch();
function watch(){
    const date = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const second = document.getElementById('second');
    const day = document.getElementById('day');
    const dayNum = document.getElementById('day-num');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    hour.innerHTML = (date.getHours() < 10) ? `0${date.getHours()}` :  date.getHours();
    
    minutes.innerHTML = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
    
    second.innerHTML = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds();
    
    day.innerHTML = weekday[date.getDay()];

    dayNum.innerHTML = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    
    month.innerHTML = (date.getMonth() < 10) ? `0${date.getMonth()+1}` : date.getMonth() + 1;
    
    year.innerHTML = (date.getFullYear() < 10) ?  `0${date.getFullYear()}` : date.getFullYear();
}

const refresh = window.setInterval(watch, 1000);
