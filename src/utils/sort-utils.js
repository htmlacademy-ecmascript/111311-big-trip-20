import dayjs from 'dayjs';

function byDayAscComparator(p1, p2) {
  if (dayjs(p1.dateFrom).isSame(dayjs(p2.dateFrom))) {
    return 0;
  } else if (dayjs(p1.dateFrom).isAfter(dayjs(p2.dateFrom))) {
    return 1;
  } else {
    return -1;
  }
}

function byPriceDescComparator(p1, p2) {
  return p2.basePrice - p1.basePrice;
}

function byDurationDescComparator(p1, p2) {
  const duration1 = dayjs(p1.dateTo).diff(dayjs(p1.dateFrom), 'm');
  const duration2 = dayjs(p2.dateTo).diff(dayjs(p2.dateFrom), 'm');
  return duration2 - duration1;
}

export {byDayAscComparator, byPriceDescComparator, byDurationDescComparator};
