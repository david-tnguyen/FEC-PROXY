import moment from 'moment';

export default (now) => {
  return moment(now).daysInMonth();
}