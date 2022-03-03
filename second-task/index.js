const result = document.querySelector('#result');
const input = document.querySelector('#input');

function handleGetDate() {
    const [day, month, year] = input.value.split('.');

    if (!day || !month || !year) {
        result.innerText = 'Неверно введены данные'
    } else {
        if (day > 0 && day <= 31 && month > 0 && month <= 12) {
            result.innerText = 'Результат: ' + getDayInfo(input.value);
        } else {
            result.innerText = 'Неверно введены данные'
        }
    } 
}

function getDayInfo(date) {
    date = new Date(date.split('.').reverse().join('.'));

    const DAYS_IN_WEEK = 7;
    const WEEK_DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const MONTH_NAMES = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const day = date.getDate();
    const year = date.getFullYear();

    const weekDayIndex = date.getDay();
    const monthIndex = date.getMonth();

    const weekDayName = WEEK_DAY_NAMES[weekDayIndex];
    const monthName = MONTH_NAMES[monthIndex];

    const closestRightSunday = day + (DAYS_IN_WEEK - (weekDayIndex || DAYS_IN_WEEK));
    const weekNum = Math.ceil(closestRightSunday / DAYS_IN_WEEK)

    return `${weekDayName}, ${weekNum} неделя ${monthName} ${year} года`;
}
