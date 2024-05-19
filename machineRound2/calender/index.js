let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekDays = ['S','M', 'T', 'W', 'T', 'F', 'S'];

const date = new Date();
const dateObj = {
    today: date,
    selectedDate : date,
    month: date.getMonth(),
    year: date.getFullYear(),
}


const monthElement = document.querySelector('.month');
const yearElement = document.querySelector('.year');
const weeksdata = document.querySelector('.weeksdata');
const monthDays = document.querySelector('.days');
const selectedDate = document.querySelector('.selected-date');
const rootContainer = document.getElementById('calender-container');

const isWeekend = (dateVal) => {
    return dateVal.getDay() % 6 === 0;
}

const updateCalender = (month = dateObj.month, year = dateObj.year) => {
    monthElement.selectedIndex = month;
    yearElement.value = year;
}

const populateControls = () => {
    const monthFragement = document.createDocumentFragment();
    Months.map((key,month) => {
        const op = document.createElement('option');
        op.textContent = key;
        op.value = month + 1;
        monthFragement.appendChild(op);
    })

    const yearFragement = document.createDocumentFragment();
    const currentYear = dateObj.today.getFullYear();

    for (let i = currentYear - 100; i < currentYear + 10; i++) {
        const op = document.createElement('option');
        op.textContent = i;
        yearFragement.appendChild(op);
    }

    const weekFragement = document.createDocumentFragment();
    weekDays.map((w) => {

        const op = document.createElement('div');
        op.textContent = w;
        weekFragement.appendChild(op);
    })
    

    monthElement.append(monthFragement);
    yearElement.append(yearFragement);
    weeksdata.append(weekFragement);
}

const updateDate = () => {
    selectedDate.textContent = dateObj.selectedDate.toDateString();
}

const populateDates = (month, year) => {
    let firstDay = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month + 1, 0 ).getDate();
    let daysFragement = document.createDocumentFragment();
    monthDays.innerHTML = '';
    for (let i = 0; i < firstDay; i++) {
        const span = document.createElement('span');
        span.textContent = '';
        daysFragement.append(span);
    }

    for (let j = 1; j <= lastDay; j++) {
        const span = document.createElement('span');
        span.textContent = j;
        span.classList.add(`date-${j}`)
        span.classList.add(`day-list`)
        if(isWeekend(new Date(year, month, j))){
            span.classList.add(`weekend`)
        }
        daysFragement.append(span);
    }

    monthDays.append(daysFragement);
    updateCalender();

    document.querySelector(`.date-${dateObj.today.getDate()}`).classList.add('today-date');
}

const prevMonth = () => {
    const prevMontData = new Date(dateObj.year, dateObj.month,0);
    if(prevMontData.getFullYear() < dateObj.today.getFullYear() - 100){
        return;
    }
    if(prevMontData){
        dateObj.month = prevMontData.getMonth();
        dateObj.year = prevMontData.getFullYear();
        populateDates(dateObj.month, dateObj.year);
    }
}

const nextMonth = () => {
    const currentDate = new Date(dateObj.year, dateObj.month + 1,1);
    if(currentDate.getFullYear >= dateObj.today.getFullYear() - 100){
        return;
    }

    if(nextMonth){
        dateObj.month = currentDate.getMonth();
        dateObj.year = currentDate.getFullYear();
        populateDates(dateObj.month, dateObj.year);
    }
    console.log(currentDate);
}

const init = () => {
    populateControls();
    populateDates(dateObj.month, dateObj.year);
    updateDate();

}

rootContainer.addEventListener('click', (e) => {
    let key = e.target.classList[0];
    const dateIncludes = key.includes('date-');
    if(dateIncludes){
        document.querySelector('.selected')?.classList.remove('selected');
        dateObj.selectedDate = new Date(dateObj.year, dateObj.month, e.target.textContent)
        updateDate();
        document.querySelector(`.date-${dateObj.selectedDate.getDate()}`).classList.add('selected');
        key = `date-${e.target.textContent}`
    }
    console.log(key);
    switch (key) {
        case 'prev':
            prevMonth();
            break;
        case 'next':
            nextMonth();
            break;
        case dateIncludes:
            dateObj.selectedDate = new Date(dateObj.year, dateObj.month, e.target.textContent)
            updateDate();
            break;
        case 'today-btn':
            dateObj.selectedDate = dateObj.today;
            dateObj.month = dateObj.today.getMonth();
            dateObj.year = dateObj.today.getFullYear();
            populateDates(dateObj.month, dateObj.year);
            updateDate();
            break;
    
        default:
            break;
    }
})

monthElement.addEventListener('change', (e) => {
    const dates = new Date(+yearElement.value, +e.target.value,0);
    dateObj.month = dates.getMonth();
    dateObj.year = dates.getFullYear();
    populateDates(dateObj.month, dateObj.year);
})

yearElement.addEventListener('change', (e) => {
    const dates = new Date(+e.target.value, monthElement.value, 0);
    dateObj.month = dates.getMonth();
    dateObj.year = dates.getFullYear();
    populateDates(dateObj.month, dateObj.year);
})


init();