const countdown = () => {
    const countDate = new Date("Sep 30, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    // Calculating time 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculating the gap
    const amountDay = Math.floor(gap / day);
    const amountHour = Math.floor((gap % day) / hour);
    const amountMinute = Math.floor((gap % hour)  / minute);
    const amountSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = amountDay;
    document.querySelector('.hour').innerText = amountHour;
    document.querySelector('.minute').innerText = amountMinute;
    document.querySelector('.second').innerText = amountSecond;
};

 setInterval(countdown,1000);