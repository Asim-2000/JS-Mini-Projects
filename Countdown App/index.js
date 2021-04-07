// We need the ending date, current date and then we have to subtract in some way to get the time left.

const newYear = 'January 1, 2022';

const countDown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const Totalseconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds)%60


    // const minutes = Math.ceil(seconds / 60);
    // const hours = Math.ceil(minutes / 60);
    // const days = Math.ceil(hours / 24);

    console.log(days,hours,minutes,seconds); // 

}


countDown();

setInterval(countDown,1000)
