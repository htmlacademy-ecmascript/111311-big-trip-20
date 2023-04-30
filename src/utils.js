import dayjs from 'dayjs';

const DAY_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const DURATION_FORMAT = 'DD HH:mm';

function toDay(dateTime) {
  return dateTime ? dayjs(dateTime).format(DAY_FORMAT) : '';
}

function toTime(dateTime) {
  return dateTime ? dayjs(dateTime).format(TIME_FORMAT) : '';
}

function duration(start, end) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  return dayjs(startDate.diff(endDate)).format(DURATION_FORMAT);
}

export {toDay, toTime, duration};
