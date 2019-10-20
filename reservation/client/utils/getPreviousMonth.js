import moment from 'moment';

export default (now) => {
  return moment(now).subtract(1, 'month');
}