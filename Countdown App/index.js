// We need the ending date, current date and then we have to subtract in some way to get the time left.

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = 'January 1, 2022';

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const Totalseconds = (newYearDate - currentDate) / 1000;

    const day = Math.floor(Totalseconds / 3600 / 24);
    const hour = Math.floor(Totalseconds / 3600) % 24;
    const mins = Math.floor(Totalseconds / 60) % 60;
    const secs = Math.floor(Totalseconds)%60


    // const minutes = Math.ceil(seconds / 60);
    // const hours = Math.ceil(minutes / 60);
    // const days = Math.ceil(hours / 24);

    console.log(day,hour,mins,secs); // 

    daysEl.innerHTML = day;
    hoursEl.innerHTML = hour;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = secs;

}


countDown();

setInterval(countDown, 1000)
