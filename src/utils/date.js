export const parseDate = (dateInput) => {
    const date = new Date(dateInput);
    const dayInWeek = date.getDay();
    const month = date.getMonth() + 1;
    const dayInMonth = date.getDate();
    const year = date.getFullYear();
    return `${parseDayInWeek(dayInWeek)}, ${dayInMonth} ${parseMonth(month)} ${year}`
}

export const parseDateDDMM = (dateInput) => {
    const date = new Date(dateInput);
    const month = date.getMonth() + 1 < 10 ? `0${date.getDate()}` : date.getMonth() + 1;
    const dayInMonth = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${dayInMonth}/${month}`
}

export const parseHours = (dateInput) => {
    const date = new Date(dateInput);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${ampm}`
}

const parseDayInWeek = (dateInput) => {
    switch (dateInput) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 0: return 'Sunday';
        default: return dateInput;
    }
}

const parseMonth = (dateInput) => {
    switch (dateInput) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';
        default: return dateInput;
    }
}