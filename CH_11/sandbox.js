const before = new Date('February 1 2019 7:30:59');
const now = new Date();

// years, months, days, times

console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());
console.log('getDay:', now.getDay());

// timestamp
console.log('timestamp:', now.getTime());

// datestrings
console.log('toDateString:', now.toDateString());
console.log('toTimeString:', now.toTimeString());
console.log('toLocalString:', now.toLocaleString());

// timestamps & comparisons

console.log(now.getTime(), before.getTime());
const elapsed = now.getTime() - before.getTime();

const mins = Math.round(elapsed / 1000 / 60);
console.log('mins:', mins);

const hours = Math.round(mins / 60);
console.log('hours:', hours);

const days = Math.round(hours / 24);
console.log('days:', days);

// converting timestamps into date objects

const timestamp = 1570741413994;
console.log(new Date(timestamp));

// building a digital clock

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const html =`
    <span>${h}:</span>
    <span>${m}:</span>
    <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);


console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'dddd, MMMM Do, YYYY'));

const then = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, then, {addSuffix: true}));
