
var deadline = '2016-09-01';

function getTimeDelt(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    var second = Math.floor( (t/1000) % 60);
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/( 1000 * 60 * 60)) % 24);
    var days = Math.floor(t/(1000 * 60 * 60 * 24) );
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'second' : second
    };
}

function initTimer(id_sec, id_min, id_hour, id_day, endTime) {

    function updateTimer() {


        var t = getTimeDelt(endTime);
        document.getElementById(id_day).innerHTML = ('0' + t.days).slice(-2);
        document.getElementById(id_hour).innerHTML = ('0' + t.hours).slice(-2);
        document.getElementById(id_min).innerHTML = ('0' + t.minutes).slice(-2);
        document.getElementById(id_sec).innerHTML = ('0' + t.second).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
    updateTimer();
    var timeInterval = setInterval(updateTimer, 1000);
}
initTimer('second', 'minute', 'hour', 'day', deadline);
initTimer('mob_second', 'mob_minute', 'mob_hour', 'mob_day', deadline);


