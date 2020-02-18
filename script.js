//initialising times (in seconds) at start of year and end of year
const dateStartYear = new Date(2020, 0, 1, 0, 0, 0, 0);
const timeStartYear = dateStartYear.getTime();
const dateEndYear = new Date(2020, 11, 31, 23, 59, 59, 999);
const timeEndYear = dateEndYear.getTime();

function updateClock() {
    let dateNow = new Date();               //dateNow & timeNow initialising, and inside fuction to keep updating every time function runs
    let timeNow = dateNow.getTime();
    let secs2020 = timeNow - timeStartYear;
    const totalsecs = timeEndYear - timeStartYear;
    let progress = (secs2020/totalsecs)*100;        //calculating progress as a percentage
    document.getElementById('progressText').innerHTML = '2020 is ' + progress.toPrecision(7) + '% complete'; //precision set to 6.sf, so updating is visible but not too fast...
    document.querySelector('.progress-bar').style.width = progress.toPrecision(3) + '%';        //updating the progress bar and header
}
setInterval(updateClock, 1000); // set to re-run function every 1 sec