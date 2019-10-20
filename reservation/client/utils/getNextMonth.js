import moment from 'moment';

export default (now) => {
  return moment(now).add(1, 'month');
}